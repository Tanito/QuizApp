import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from "../../services/endpoints";

@Component({
  selector: 'app-orgs',
  templateUrl: './orgs.page.html',
  styleUrls: ['./orgs.page.scss'],
})
export class OrgsPage implements OnInit {
      Quizzes: any = {};
      city: string;
  ​    country: string;
  ​    description:string;
  ​    email: string;
  ​    id: number;
  ​    logo: string;
  ​    name: string;
      schoolQuizzes: any;
      body: any;
      userId: number;
      quizId: number;
      info: any;

  constructor( private storage: Storage,
    private http: HttpClient, 
    private endpoints: Endpoints,) { }

  ngOnInit() {
    this.cargarStorage().then(() =>{

      this.getOrgQuizzes(this.id)
      .subscribe(async resp => {
       this.Quizzes = await resp
       this.schoolQuizzes = this.Quizzes.quizzes.byId
        // let listado = resp
        console.log("listado", this.schoolQuizzes)
      
      })
    })
  }

  getOrgQuizzes(id){
    console.log("se ejecuta get quizzes", this.endpoints.SCHOOL_ENDPOINT + '/' + id + '/quizzes')
    return this.http.get(this.endpoints.SCHOOL_ENDPOINT + '/' + id + '/quizzes')
    
  } 

//Probar si funciona el enroll.
  inscriptionQuizApi(userId, quizId){
    const body = {UserId: userId, QuizId: quizId }
      
    this.http.post(this.endpoints.ROLE_ENDPOINT, body).subscribe(data => {
      this.info = data;
     }
 )
   
  }

  async cargarStorage(){ //Cargo el localStorage
    await this.storage.get('School').then(val => {
     this.id = val.id; 
     this.name= val.name;
     this.email= val.email;
     this.logo= val.logo;
     this.description= val.description;    
     this.country= val.country;
     this.city= val.city;
     console.log("id2", this.id)
   })
   }

}
