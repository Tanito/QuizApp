import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Endpoints } from "../../services/endpoints";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {

  // todo el quiz
  Quiz: any;
  // datos del quiz
  description: string;
  id: number;
​  logo: string;
​  name: string;
​  quantity: number;
  // otras info del quiz
  QuizTags: any;
  teachers: any;
  Subject: any = {};
  School: any = {};
  Reviews: any;

  constructor(private storage: Storage,
              private endpoints: Endpoints,
             ) { }

  ngOnInit() {
    this.cargarStorage();
  }


  async cargarStorage(){ //Cargo el localStorage
    // await this.storage.remove('Quiz').then(() =>{

      await this.storage.get('Quiz').then(val => { 
       this.description = val.description; 
       this.quantity= val.quantity;
       this.logo= val.logo;
       this.id = val.id;
       this.name= val.name;  
       this.QuizTags= val.QuizTags;
       this.teachers= val.teachers;
       this.Subject= val.Subject;
       this.School= val.School;
       this.Reviews= val.Reviews;  
       console.log("id2", this.id)
     })
    // })
  //  .then(()=> this.getQuizzes() // una vez que tengo el id, llamo a la api
  //  .subscribe( resp => {
  //  this.Quizzes = resp
    
  //  }))
   }

}
