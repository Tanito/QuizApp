import { Component, OnInit } from '@angular/core';
import { TabsPage } from '../tabs/tabs.page';
import { DocsService } from 'src/app/services/docs.service';
import { ActivatedRoute } from '@angular/router';
import { AuthGuardGuard } from 'src/app/services/auth-guard.guard';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from "../../services/endpoints";
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schoolsList',
  templateUrl: './schoolsList.page.html',
  styleUrls: ['./schoolsList.page.scss'],
})
export class SchoolsListPage implements OnInit {

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
  searchOrg: string;
  filteredOrgs: any;
  schoolsToShow: any;
  
  constructor(private tabsPage: TabsPage, 
              private docsService: DocsService, 
              private route: ActivatedRoute, 
              private authGuard: AuthGuardGuard,
              private http: HttpClient,
              private endpoints: Endpoints,
              private storage: Storage,
              private router:Router,
              ) { }



  ngOnInit() {
  // this.isAuth = this.authGuard.loggedIn
  this.docsService.getSchools()
  .subscribe( resp => {
   this.Schools = resp
    // let listado = resp
    this.schoolsToShow = this.Schools
  })
  }

  getSchool(id){
    this.id = id
    return this.http.get(this.endpoints.SCHOOL_ENDPOINT + '/' + this.id)
    
   } 

   searchInputChanged(searchOrg) {
   
     if (searchOrg === '') {
      
      this.schoolsToShow = this.Schools
     
      return }
      if(searchOrg !== '')  this.schoolsToShow = this.Schools.filter((o) => {
        
         
            return (o.name.toLowerCase() === searchOrg.toLowerCase());
        })

    
}

goToSchool(id){
  this.id = id
  this.getSchool(this.id)
  .subscribe( resp => {
   this.School = resp
    // let listado = resp
    console.log("listado", this.School)
    this.storage.set('School', this.School);
    this.router.navigate(['orgs']);
  })
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
