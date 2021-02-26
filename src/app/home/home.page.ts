import { Component } from "@angular/core";
import { UsuarioService } from "../services/usuario.service";
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


  constructor(private afAuth: AngularFireAuth,
    public usuarioProv: UsuarioService,
    private navCtrl: NavController) {

  }
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

        this.navCtrl.navigateRoot( '/home' )
      });
  }

}
