import { Component, OnInit } from '@angular/core';
import { TabsPage } from '../tabs/tabs.page';
import { User } from 'src/app/models/user.model';
import { AccountService } from 'src/app/services/account.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit {
  name: '';

  
  user: User[]

  constructor(private tabsPage: TabsPage, private accountService: AccountService, 
    private http: HttpClient
    ) { }
    getName(){
      return this.http.get('https://prueba2053456.herokuapp.com/users')
  
     } 
  
  
  ngOnInit() {
    this.user = this.accountService.users


  //   this.http.get('https://ionic.io')
  // .then(data => {

  //   console.log(data);


  // })
  // .catch(error => {

  //   console.log(error.status);
  //   console.log(error.error); // error message as string
  //   console.log(error.headers);

  // });



   this.getName()
   .subscribe( resp => {
    this.name = resp[0].firstName;
  
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
