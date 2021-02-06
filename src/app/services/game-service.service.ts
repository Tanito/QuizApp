import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {
//  page: number = 1;
//  pageSize: number = 6;

  constructor(private http: HttpClient) { }



//   getQuizzes(){
//     return this.http.get('https://apiquizzes.herokuapp.com/quiz')

//    } 

getQuizzes(){
    return this.http.get('http://localhost:3000/mobile')

   } 
  
  
}
