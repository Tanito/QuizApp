import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoadingController } from "@ionic/angular";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { User } from "src/app/models/user.model";
import { AccountService } from "src/app/services/account.service";
import { HttpClient } from "@angular/common/http";
import { Endpoints } from "../services/endpoints";
import { Storage } from "@ionic/storage";

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

  profileForm = this.formBuilder.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    birthdate: ["", Validators.required],
    cellphone: ["", Validators.required],
    photo: ["", Validators.required],
  });

  constructor(
    private router: Router,
    public loadingController: LoadingController,
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private http: HttpClient,
    private endpoints: Endpoints,
    private storage: Storage
  ) {}

  ngOnInit() {
    this.cargarStorage();
  }

  cargarStorage() {
    this.storage.get("User").then((val) => {
      this.id = val.user.id;
    });
  }

/*   onSubmitEditUser() {
    const formValue = this.profileForm.value;
    const userEdited = {
      firstName: formValue["firstName"],
      lastName: formValue["lastName"],
      birthdate: formValue["birthdate"],
      cellphone: formValue["cellphone"],
      photo: formValue["photo"]
    }
  } */

  onSubmit() {
    const formValue = this.profileForm.value;
    const userEdited = {
      firstName: formValue["firstName"],
      lastName: formValue["lastName"],
      birthdate: formValue["birthdate"],
      cellphone: formValue["cellphone"],
      photo: formValue["photo"]
    }
    this.http.put(this.endpoints.EDIT_USER_ENDPOINT + "/" + this.id, userEdited)
    .subscribe((resp) => {
      return resp;
      })
  }
}
