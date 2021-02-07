import { Component, OnInit } from '@angular/core';
import { TabsPage } from '../tabs/tabs.page';
import { DocsService } from 'src/app/services/docs.service';
import { ActivatedRoute } from '@angular/router';
import { AuthGuardGuard } from 'src/app/services/auth-guard.guard';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from "../../services/endpoints";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.page.html',
  styleUrls: ['./docs.page.scss'],
})
export class DocsPage implements OnInit {

  Schools: any;
  School: any;
  headClass= 'head-white';
  isAuth: boolean;
  trucboool= false;
  ​​id: number;
  ​​name: string;
  ​​email: string;
  ​​logo: string;
  city: string;
​​  country: string;
​​  description: string;

  
  constructor(private tabsPage: TabsPage, 
              private docsService: DocsService, 
              private route: ActivatedRoute, 
              private authGuard: AuthGuardGuard,
              private http: HttpClient,
              private endpoints: Endpoints,
              private storage: Storage,
              ) { }



  ngOnInit() {
  // this.isAuth = this.authGuard.loggedIn
  this.docsService.getSchools()
  .subscribe( resp => {
   this.Schools = resp
    // let listado = resp
    console.log("listado", this.Schools)
  })
  }

  getSchool(){
    return this.http.get(this.endpoints.SCHOOL_ENDPOINT)

   } 



  openFirst(){
    this.tabsPage.openFirst()
  }

  logScrollStart(){
  }

  logScrollEnd(){
   }

  back(){
   
  }
}
