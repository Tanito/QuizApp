import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Endpoints } from "./endpoints";
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService implements OnInit{

  id: number;

  constructor(private http: HttpClient,
              private endpoints: Endpoints,
              private storage: Storage,
    ) { }

    
    ngOnInit() {
 
    }
    
    getQuizzes(){
      return this.http.get(this.endpoints.MOBILE_QUIZZES_ENDPOINT + this.id)
      
    } 

    cargarStorage(){
      this.storage.get('User').then(val => { 
      this.id= val.user.id;
      })
    }
    
    
  }
  