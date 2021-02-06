import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 
  isAuth = true
  constructor( private http: HttpClient ) { }

  login(){
    // console.log("DATOS",this.email,this.password)
     this.http.post('https://apiquizzes.herokuapp.com/auth/login', 'body').subscribe(data => {
          // console.log(JSON.stringify(data));
          console.log("Intentando loguear",data);
         }, error => {
          console.log("Error al loguear");
   } 
     )};
//    this.http.post("https://myserver/api/my/endpoint", "some=parameter&another=parameter&and=another&one=parameter").subscribe(data => {
//     console.log(JSON.stringify(data.json()));
// }, error => {
//     console.log(JSON.stringify(error.json()));
// });

  changeAuth(){
    this.isAuth = !this.isAuth
  }  

}
