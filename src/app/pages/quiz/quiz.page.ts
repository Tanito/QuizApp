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
  QuizQA: any = {};
  // datos del quiz
  description: string;
  id: number;
  logo: string;
  name: string;
  quantity: number;
  // otras info del quiz
  QuizTags: any;
  teachers: any;
  Subject: any = {};
  School: any = {};
  Reviews: any;
  // listado de preguntas
  Questions: any;
  //Listado de respuestas
  Answers: any;
  constructor(private storage: Storage,
    private http: HttpClient,
    private endpoints: Endpoints,
  ) { }

  ngOnInit() {
    this.cargarStorage();
  }

  traerQA(id) {
    
    console.log("se ejecuta get quizzes", this.endpoints.QUIZ_ENDPOINT + '/' + id)
    return this.http.get(this.endpoints.QUIZ_ENDPOINT + '/' + id)
  }

  comenzar() {
    this.traerQA(this.id)
    .subscribe(resp => {
      this.QuizQA = resp
      // let listado = resp
      console.log("pregunta", this.QuizQA.questions.byId[0].question)
      console.log("respuestas", this.QuizQA.questions.byId[0].Answers[0].text)
      console.log("respuestas", this.QuizQA.questions.byId[0].Answers[1].text)
      console.log("respuestas", this.QuizQA.questions.byId[0].Answers[2].text)
      console.log("respuestas", this.QuizQA.questions.byId[0].Answers[3].text)
      // this.storage.set('Quiz', this.Quiz);
      // this.router.navigate(['quiz']);
    })
  }
  async cargarStorage() { //Cargo el localStorage
    // await this.storage.remove('Quiz').then(() =>{

    await this.storage.get('Quiz').then(val => {
      this.description = val.description;
      this.quantity = val.quantity;
      this.logo = val.logo;
      this.id = val.id;
      this.name = val.name;
      this.QuizTags = val.QuizTags;
      this.teachers = val.teachers;
      this.Subject = val.Subject;
      this.School = val.School;
      this.Reviews = val.Reviews;
      console.log("id2", this.id)
    })
    // })
    //  .then(()=> this.getQuizzes() // una vez que tengo el id, llamo a la api
    //  .subscribe( resp => {
    //  this.Quizzes = resp

    //  }))
  }

}
