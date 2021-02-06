import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

password: string;
email: string;

constructor( private authService: AuthService, private http: HttpClient) { 
}

imprimir(){
  console.log(this.email, this.password)
};


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
          console.log("Intentando loguear", data);
         }, error => {
          console.log("Error al loguear");
   } 
     )};
  ngOnInit() {



  }

}
