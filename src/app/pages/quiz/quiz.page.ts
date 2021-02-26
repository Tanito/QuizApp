import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Endpoints } from "../../services/endpoints";
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

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
  infoQuiz: boolean = true;
  qa: boolean = false;
  clicked: any;
  step: number = 1;
  progressBar: number;
  countCorrect: number = 0;
  Finished: string = '';
  imageToShow: string = '';
  userId: number;
  info: any;
  time: number = 3000;
  startTime: number = 3000;
  x: any;
  interval: any;
  timeLeft: any = 60;
 

  constructor(private storage: Storage,
    private http: HttpClient,
    private endpoints: Endpoints,
    public alertController: AlertController,
    private router:Router,
  ) { }

  ngOnInit() {
    this.cargarStorage();
  }

  traerQA(id) {
    
   return this.http.get(this.endpoints.QUIZ_ENDPOINT + '/' + id)
  }

  comenzar() {
    this.traerQA(this.id)
    .subscribe(resp => {
      this.QuizQA = resp
      this.Questions = this.QuizQA.questions.byId
      this.progressBar = (this.step -1) / this.Questions.length
    })
    this.accion1();
    }
 
  changeStep(i, a) {
    if(a === undefined) {
      a = false
    }
    this.time = this.startTime;
    this.step = i;
    this.progressBar = (this.step -1) / this.Questions.length
    this.checkAnswer(a)
    if(this.step > this.Questions.length){
      this.Finished = 'finished'
      clearInterval(this.interval)
      const x = this.countCorrect / this.Questions.length;
      this.quizAttempt(Math.trunc(x * 100) , true);
      if (0 <= x && x <= 0.4) return this.imageToShow = "../../../assets/veryBad.gif"
      if (0.4 < x && x < 0.7) return this.imageToShow = "../../../assets/masomenos.gif"
      if (0.7 <= x && x < 0.9) return this.imageToShow = "../../../assets/ok.gif"
      if (0.9 <= x ) return this.imageToShow = "../../../assets/veryGood.gif"
    }
    
  }

  accion1(){
    this.infoQuiz = !this.infoQuiz;
    this.qa = !this.qa;
    this.time = this.startTime;
    this.Finished = 'onCourse'
    this.startTimer()
    
  }

volverFin(){
  this.router.navigate(['orgs'])
}

startTimer() {
  this.interval = setInterval(() => {
     if(this.timeLeft > 0) {
      this.timeLeft--;
    } else {
      clearInterval(this.interval)
      this.timeLeft = 60;
      this.step = this.Questions.length + 1;
      this.Finished = 'finished'
      const x = this.countCorrect / this.Questions.length;
      this.quizAttempt(Math.trunc(x * 100) , true);
      if (0 <= x && x <= 0.4) return this.imageToShow = "../../../assets/veryBad.gif"
      if (0.4 < x && x < 0.7) return this.imageToShow = "../../../assets/masomenos.gif"
      if (0.7 <= x && x < 0.9) return this.imageToShow = "../../../assets/ok.gif"
      if (0.9 <= x ) return this.imageToShow = "../../../assets/veryGood.gif"
    }
  },1000)
}

async presentAlert() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'QuizApp',
    message: 'Se te ha acabado el tiempo!',
    buttons: ['OK']
  });

  await alert.present();
}

  checkAnswer(a){
     if(a.correct) {
      this.countCorrect = this.countCorrect + 1;
    }
   }

  quizAttempt(grade, finished){
    console.log("entré a quizAttempt")
    const body = {QuizId: this.id, 
                  UserId: this.userId, 
                  grade, 
                  finished,
      }
      this.http.post(this.endpoints.ATTEMPTS_ENDPOINT, body).subscribe(data => {
        this.info = data;
        
       })
      
  }

  async cargarStorage() { //Cargo el localStorage
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
    await this.storage.get('User').then(val => {
      this.userId = val.user.id;
      })
   }
}
