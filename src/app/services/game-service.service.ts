import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Endpoints } from "./endpoints";

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {


  constructor(private http: HttpClient,
              private endpoints: Endpoints
    ) { }


getQuizzes(){
    return this.http.get(this.endpoints.MOBILE_QUIZZES_ENDPOINT + '/2')

   } 
  
  
}
