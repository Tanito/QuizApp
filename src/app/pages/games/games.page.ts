import { Component, OnInit } from '@angular/core';
import { TabsPage } from '../tabs/tabs.page';
import { User } from 'src/app/models/user.model';
import { AccountService } from 'src/app/services/account.service';
import { HttpClient } from '@angular/common/http';
import { GameServiceService } from 'src/app/services/game-service.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit {
  name: '';
  Entities: any = [];
  Quizzes: any = [];
  user: User[]

  constructor(private tabsPage: TabsPage, private accountService: AccountService, 
    private http: HttpClient, private gameService: GameServiceService
    ) { }
    // getQuizzes(){
    //   return this.http.get('https://prueba2053456.herokuapp.com/users')
  
    //  } 
  
  
  ngOnInit() {
    this.user = this.accountService.users
    this.gameService.getQuizzes()
    .subscribe( resp => {
     this.Entities = resp,
     this.Quizzes = this.Entities.entities.quizzes
      // let listado = resp
      console.log("listado", this.Quizzes)
    })

  //   this.http.get('https://ionic.io')
  // .then(data => {

  //   console.log(data);


  // })
  // .catch(error => {

  //   console.log(error.status);
  //   console.log(error.error); // error message as string
  //   console.log(error.headers);

  // });



 
  }
  
  
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  openFirst(){
    this.tabsPage.openFirst()
  };



}
