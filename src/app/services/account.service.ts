import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Endpoints } from "./endpoints";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AccountService {

  users: User[] = []
  //Guardar todos los datos del USER
  registerData: any;
  constructor(
    private http: HttpClient,
    private endpoints: Endpoints,
    private router: Router,
    public alertController: AlertController,
  ) { }

  addUser(user: User) {

    this.http.post(this.endpoints.USER_REGISTER_ENDPOINT, user).subscribe(data => {
      this.registerData = data;
      if (this.registerData.token !== undefined) {
        this.presentAlert()
        this.router.navigateByUrl('/home')
      } else {
        console.log("Error al loguear");
      }
    })
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'QuizApp',
      message: 'Registro realizado correctamente',
      buttons: ['OK']
    });

    await alert.present();
  }
}
