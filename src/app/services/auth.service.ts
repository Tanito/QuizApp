import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  email: '';
  password: '';
 
  isAuth = true
  constructor( private http: HttpClient ) { }

  // login(){
  //    this.http.post('https://prueba2053456.herokuapp.com/auth/login', `email=${email}&password=${password}`)

  //  } 

//    this.http.post("https://myserver/api/my/endpoint", "some=parameter&another=parameter&and=another&one=parameter").subscribe(data => {
//     console.log(JSON.stringify(data.json()));
// }, error => {
//     console.log(JSON.stringify(error.json()));
// });

  changeAuth(){
    this.isAuth = !this.isAuth
  }  

}
