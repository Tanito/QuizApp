import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoadingController, AlertController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Endpoints } from "../../services/endpoints";
import { Facebook } from '@ionic-native/facebook/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  password: string;
  email: string;
  userObject: any;
  loginError: string;
  FB_APP_ID: number = 1302144180185021;
  
  constructor( private authService: AuthService, 
               private http: HttpClient,
               private router:Router, 
               private storage: Storage,
               private endpoints: Endpoints,
               private fb: Facebook,
               private nativeStorage: NativeStorage,
               public loadingController: LoadingController,
               private platform: Platform,
               public alertController: AlertController) { 
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


  ngOnInit() {
  }

  async doFbLogin(){
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    this.presentLoading(loading);

    //the permissions your facebook app needs from the user
    const permissions = ["public_profile", "email"];

    this.fb.login(permissions)
    .then(response => {
      let userId = response.authResponse.userID;
      //Getting name and email properties
      //Learn more about permissions in https://developers.facebook.com/docs/facebook-login/permissions

      this.fb.api("/me?fields=name,email", permissions)
      .then(user => {
        user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
        //now we have the users info, let's save it in the NativeStorage
        this.nativeStorage.setItem('facebook_user',
        {
          name: user.name,
          email: user.email,
          picture: user.picture
        })
        .then(() => {
          this.router.navigate(["/user"]);
          loading.dismiss();
        }, error => {
          console.log(error);
          loading.dismiss();
        })
      })
    }, error =>{
      console.log(error);
      if(!this.platform.is('cordova')){
        this.presentAlert();
      }
      loading.dismiss();
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
       message: 'Cordova is not available on desktop. Please try this in a real device or in an emulator.',
       buttons: ['OK']
     });

    await alert.present();
  }

  async presentLoading(loading) {
    return await loading.present();
  }

}