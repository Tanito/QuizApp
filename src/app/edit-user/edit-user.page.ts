import { Component, OnInit } from "@angular/core";
import { LoadingController } from "@ionic/angular";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Endpoints } from "../services/endpoints";
import { Storage } from "@ionic/storage";
import { Router } from '@angular/router';

@Component({
  selector: "app-edit-user",
  templateUrl: "./edit-user.page.html",
  styleUrls: ["./edit-user.page.scss"],
})
export class EditUserPage implements OnInit {
  private todo: FormGroup;
  name = new FormControl("");
  progressID = 0;
  id: number;
  editedUser: any;

  profileForm = this.formBuilder.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    birthdate: ["", Validators.required],
    cellphone: ["", Validators.required],
    photo: ["", Validators.required],
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
    this.cargarStorage();
  }

  cargarStorage() {
    this.storage.get("User").then((val) => {
      this.id = val.user.id;
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
            this.editedUser = resp;
            this.storage.set('User', this.editedUser);
            this.router.navigate(['tabs/account'])
            return resp;
          },
          (error) => {
            console.log(error);
          }
        );
    });
  }
}
