import { Component, OnInit } from '@angular/core';
import { TabsPage } from '../tabs/tabs.page';
import { User } from 'src/app/models/user.model';
import { AccountService } from 'src/app/services/account.service';
import { HttpClient } from '@angular/common/http';
import { GameServiceService } from 'src/app/services/game-service.service';
import { Storage } from '@ionic/storage';
import { Endpoints } from "../../services/endpoints";
import { Router } from '@angular/router';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.page.html',
  styleUrls: ['./quizzes.page.scss'],
})
export class QuizzesPage implements OnInit {
  name: string = '';
  Entities: any = [];
  Quizzes: any = [];
  Quiz: any;
  user: User[]
  userObject: any = {};
  firstName: string;
  lastName: string;
  email: string;
  id: number;
  birthdate: Date;
  cellphone: number;
  photo: string;
  type: string;

  constructor(private tabsPage: TabsPage, 
              private accountService: AccountService, 
              private http: HttpClient, 
              private gameService: GameServiceService, 
              private storage: Storage,
              private endpoints: Endpoints,
              private router:Router,
    ) { }
  
  
  ngOnInit() {
  
    this.cargarStorage() //Refrescar la pantalla cuando carga?
console.log("id", this.id)
 
    
   
  }

  getQuizzes(){
    console.log("se ejecuta get quizzes", this.endpoints.MOBILE_QUIZZES_ENDPOINT + '/' + this.id)
    return this.http.get(this.endpoints.MOBILE_QUIZZES_ENDPOINT + '/' + this.id)
    
  } 

  getQuiz(id){
    this.id = id
    return this.http.get(this.endpoints.QUIZ_INFO_ENDPOINT + '/' + this.id)
    
   } 

   goToQuiz(id){
    this.id = id
    this.getQuiz(this.id)
    .subscribe( resp => {
     this.Quiz = resp
      // let listado = resp
      console.log("listado", this.Quiz)
      this.storage.set('Quiz', this.Quiz);
      this.router.navigate(['quiz']);
    })
  }


async cargarStorage(){ //Cargo el localStorage
 await this.storage.get('User').then(val => { 
  this.firstName = val.user.firstName; 
  this.lastName= val.user.lastName;
  this.email= val.user.email;
  this.id = val.user.id;
  this.birthdate= val.user.birthdate;    
  this.cellphone= val.user.cellphone;
  this.photo= val.user.photo;
  this.type= val.user.type;
  console.log("id2", this.id)
}).then(()=> this.getQuizzes() // una vez que tengo el id, llamo a la api
.subscribe( resp => {
this.Quizzes = resp
 
}))
}
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  openFirst(){
    this.tabsPage.openFirst()
  };



}
