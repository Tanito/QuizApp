import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class Endpoints {


    //BASE_ENDPOINT:string = 'https://apiquizzes.herokuapp.com';
    
    BASE_ENDPOINT:string = 'http://localhost:3000';

    MOBILE_QUIZZES_ENDPOINT:string = this.BASE_ENDPOINT + '/mobile/quizzes'; // + id user
    
    AUTH_ENDPOINT:string = this.BASE_ENDPOINT + '/auth';
    
    ATTEMPTS_ENDPOINT:string = this.BASE_ENDPOINT + '/attempts';

    GET_STATS_ENDPOINT:string = this.ATTEMPTS_ENDPOINT + '/user';

    ME_ENDPOINT:string = this.AUTH_ENDPOINT + '/me';
    
    RESTORE_ENDPOINT:string = this.AUTH_ENDPOINT + '/restore';
    
    LOGIN_ENDPOINT:string = this.AUTH_ENDPOINT + '/login';

    LOGIN_FACE_ENDPOINT:string = this.AUTH_ENDPOINT + '/facebook';

    LOGIN_GOOGLE_ENDPOINT:string = this.AUTH_ENDPOINT + '/google';

    // RECOVERY_PASS_ENDPOINT:string = this.AUTH_ENDPOINT + '/resetpassword';
        
    LOGIN_ORG_ENDPOINT:string = this.AUTH_ENDPOINT + '/login/org';
    
    SCHOOL_REGISTER_ENDPOINT:string = this.BASE_ENDPOINT + '/org';
    
    USER_REGISTER_ENDPOINT:string = this.AUTH_ENDPOINT + '/register';
    
    SCHOOL_ENDPOINT:string = this.BASE_ENDPOINT + '/org';
    
    QUIZ_ENDPOINT:string = this.BASE_ENDPOINT + '/quiz';
    
    QUIZ_INFO_ENDPOINT:string = this.QUIZ_ENDPOINT + '/info';
   
    QUESTIONS_ENDPOINT:string = this.BASE_ENDPOINT + '/questions';

    ROLE_ENDPOINT:string = this.BASE_ENDPOINT + '/roles';

    ENROLL_ENDPOINT:string = this.ROLE_ENDPOINT + '/quizzes';

    JOIN_QUIZ_ENDPOINT:string = this.ROLE_ENDPOINT + '/enroll';

    ADD_TO_FAVS_ENDPOINT:string = this.ROLE_ENDPOINT + '/fan';


    FAVORITES_ENDPOINT:string = this.ROLE_ENDPOINT + '/favorites/user';

    ENROLLED_ENDPOINT:string = this.ROLE_ENDPOINT + '/enrolled/user';

    EDIT_USER_ENDPOINT:string = this.BASE_ENDPOINT + '/users';
    
    // SUBJECT_ENDPOINT = BASE_ENDPOINT + '/subject';
    
    // USER_PROFILE_ENDPOINT = BASE_ENDPOINT + '/auth/me/';
    
    
    
    // FINAL_REGISTER_SCHOOL_ENDPOINT = AUTH_ENDPOINT + '/org/register';
    
    // GET_USER_EMAIL_ENDPOINT = BASE_ENDPOINT + '/users/email/';
    
    // TEACHER_ENDPOINT = BASE_ENDPOINT + '/teachers/';
  constructor() { }






  
}





