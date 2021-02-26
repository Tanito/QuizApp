import { Component } from "@angular/core";
import { UsuarioService } from "../services/usuario.service";
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Endpoints } from "../services/endpoints";
//Firebase
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import firebase from 'firebase/app';


@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {

  password: string;
  email: string;
  userObject: any;
  loginError: string;


  constructor(private afAuth: AngularFireAuth,
              public usuarioProv: UsuarioService,
              private navCtrl: NavController,
              private authService: AuthService,
              private http: HttpClient,
              private router: Router,
              private storage: Storage,
              private endpoints: Endpoints) {

  }

  imprimir(){
    console.log(this.email, this.password)
  };


  loginOK() {
    this.storage.set('User', this.userObject);
   setTimeout( () => {
    this.router.navigate(['tabs'])
  }, 2000);
    ;
  }

  loginFunction (){
    console.log("DATOS1",this.email, this.password)
      this.authService.login()
    }

    login(){
      const body = {email: this.email,
      password: this.password}

     this.http.post(this.endpoints.LOGIN_ENDPOINT, body).subscribe(data => {
          this.userObject = data;
          if (this.userObject.token !== undefined){
            this.loginOK()
         }
         }, error => {
          this.loginError = "Usuario o Password incorrectos"
          
   } 
     )};

  signInWithFacebook() {
    this.afAuth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => {
        console.log(res)
        let user = res.user;

        this.usuarioProv.cargarUsuario(
          user.displayName,
          user.email,
          user.photoURL,
          user.uid,
          'facebook'
        );

        this.navCtrl.navigateRoot('/home')
      });
  }

}
