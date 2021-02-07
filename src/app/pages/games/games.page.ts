import { Component, OnInit } from '@angular/core';
import { TabsPage } from '../tabs/tabs.page';
import { User } from 'src/app/models/user.model';
import { AccountService } from 'src/app/services/account.service';
import { HttpClient } from '@angular/common/http';
import { GameServiceService } from 'src/app/services/game-service.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit {
  name: string = '';
  Entities: any = [];
  Quizzes: any = [];
  user: User[]
  userObject: any = {};
  firstName: string;

  constructor(private tabsPage: TabsPage, private accountService: AccountService, 
    private http: HttpClient, private gameService: GameServiceService, private storage: Storage,
    ) { }
  
  
  ngOnInit() {
    // this.user = this.accountService.users
    this.gameService.getQuizzes()
    .subscribe( resp => {
    this.Quizzes = resp
     
  })
  this.cargarStorage()

  // this.firstName = this.userObject.user.firstName; // Esto acá lo hace romper.
  
  }
  cargarStorage(){
    // return new Promise((resolve, reject) => {
   this.storage.get('User').then(val => { 
     
         
      this.firstName = val.user.firstName; 
      console.log("INFO STORAGE", this.firstName)
    //   resolve(true);
    // } else {
    //   resolve(false);
    // }
  // });
})

  }
  
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  openFirst(){
    this.tabsPage.openFirst()
  };



}
