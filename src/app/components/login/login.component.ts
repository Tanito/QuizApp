import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

password: string;
email: string;
userObject: any;

constructor( private authService: AuthService, private http: HttpClient, private router:Router,) { 
}

imprimir(){
  console.log(this.email, this.password)
};

loginOK() {
  this.router.navigate(['tabs']);
}

loginFunction (){
  console.log("DATOS1",this.email, this.password)
    this.authService.login()
  }

  login(){
    console.log("DATOS",this.email,this.password)
    const body = {email: this.email,
      password: this.password}

     this.http.post('http://localhost:3000/auth/login', body).subscribe(data => {
          // console.log(JSON.stringify(data));
          this.userObject = data;
          if (this.userObject.token !== undefined){
            this.loginOK()
         }
         }, error => {
          console.log("Error al loguear", this.userObject.token);
   } 
     )};


  ngOnInit() {



  }

}
