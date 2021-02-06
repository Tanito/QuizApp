import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  constructor(private http: HttpClient) { }

  getQuizzes(){
    return this.http.get('https://apiquizzes.herokuapp.com/quiz')

   } 
  
}
