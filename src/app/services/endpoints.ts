import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class Endpoints {


    // BASE_ENDPOINT:string = 'https://apiquizzes.herokuapp.com';
    
    BASE_ENDPOINT:string = 'http://localhost:3000';

    MOBILE_QUIZZES_ENDPOINT:string = this.BASE_ENDPOINT + '/mobile/quizzes'; // + id user
    
    AUTH_ENDPOINT:string = this.BASE_ENDPOINT + '/auth';
    
    ME_ENDPOINT:string = this.AUTH_ENDPOINT + '/me';
    
    RESTORE_ENDPOINT:string = this.AUTH_ENDPOINT + '/restore';
    
    LOGIN_ENDPOINT:string = this.AUTH_ENDPOINT + '/login';
    
    LOGIN_ORG_ENDPOINT:string = this.AUTH_ENDPOINT + '/login/org';
    
    SCHOOL_REGISTER_ENDPOINT:string = this.BASE_ENDPOINT + '/org';
    
    USER_REGISTER_ENDPOINT:string = this.AUTH_ENDPOINT + '/register';
    
    SCHOOL_ENDPOINT:string = this.BASE_ENDPOINT + '/org';
    
    QUIZ_ENDPOINT:string = this.BASE_ENDPOINT + '/quiz';
    
    QUIZ_INFO_ENDPOINT:string = this.QUIZ_ENDPOINT + '/info';
   
    QUESTIONS_ENDPOINT:string = this.BASE_ENDPOINT + '/questions';

   // COUNT_QUIZ_ENDPOINT = QUIZ_ENDPOINT + '/all/quizzes';
    
    // SUBJECT_ENDPOINT = BASE_ENDPOINT + '/subject';
    
    // USER_PROFILE_ENDPOINT = BASE_ENDPOINT + '/auth/me/';
    
    
    
    // FINAL_REGISTER_SCHOOL_ENDPOINT = AUTH_ENDPOINT + '/org/register';
    
    // GET_USER_EMAIL_ENDPOINT = BASE_ENDPOINT + '/users/email/';
    
    // TEACHER_ENDPOINT = BASE_ENDPOINT + '/teachers/';
  constructor() { }






  
}





