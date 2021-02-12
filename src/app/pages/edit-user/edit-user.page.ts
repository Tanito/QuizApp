import { Component, OnInit } from "@angular/core";
import { LoadingController } from "@ionic/angular";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Endpoints } from "../../services/endpoints";
import { Storage } from "@ionic/storage";
import { Router } from '@angular/router';

@Component({
  selector: "app-edit-user",
  templateUrl: "./edit-user.page.html",
  styleUrls: ["./edit-user.page.scss"],
})
export class EditUserPage implements OnInit {
  firstName: string;
  lastName: string;
  cellphone: number;
  birthdate: string;
  photo: string;
  name = new FormControl("");
  progressID = 0;
  id: number;
  token: string;
  editedUser: any;

  
  profileForm = this.formBuilder.group({
    firstName: [""],
    lastName: [""],
    birthdate: [""],
    cellphone: [""],
    photo: [""],
  });
  
  constructor(
    public loadingController: LoadingController,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private endpoints: Endpoints,
    private storage: Storage,
    private router:Router, 
  ) {}

  ngOnInit() {
    this.cargarStorage()
  }

  cargarStorage() {
    this.storage.get("User").then((val) => {
      this.id = val.user.id;
      this.token = val.token;
      this.firstName = val.user.firstName;
      this.lastName = val.user.lastName;
      this.birthdate = val.user.birthdate;
      this.cellphone = val.user.cellphone;
      this.photo = val.user.photo;
    });
  }

  onSubmit() {
    const formValue = this.profileForm.value;
    const userEdited = {
      firstName: formValue["firstName"],
      lastName: formValue["lastName"],
      birthdate: formValue["birthdate"],
      cellphone: formValue["cellphone"],
      photo: formValue["photo"],
    };
    return new Promise((resolve) => {
      this.http
        .put(this.endpoints.EDIT_USER_ENDPOINT + "/" + this.id, userEdited)
        .subscribe(
          (resp) => {
            this.editedUser = {
              user: resp,
              token: this.token
            };
            this.storage.set('User', this.editedUser)
              .then(() => {
                this.router.navigate(['tabs/account'])
                return
              })
          },
          (error) => {
            console.log(error);
          }
        );
    });
  }
}
