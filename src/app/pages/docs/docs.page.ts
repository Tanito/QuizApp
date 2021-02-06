import { Component, OnInit } from '@angular/core';
import { TabsPage } from '../tabs/tabs.page';
import { DocsService } from 'src/app/services/docs.service';
import { ActivatedRoute } from '@angular/router';
import { AuthGuardGuard } from 'src/app/services/auth-guard.guard';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.page.html',
  styleUrls: ['./docs.page.scss'],
})
export class DocsPage implements OnInit {

  Schools: any = [];
  headClass= 'head-white';
  isAuth: boolean;
  trucboool= false;
  
  constructor(private tabsPage: TabsPage, private docsService: DocsService, private route: ActivatedRoute, private authGuard: AuthGuardGuard) { }



  ngOnInit() {
  this.isAuth = this.authGuard.loggedIn
  this.docsService.getSchools()
  .subscribe( resp => {
   this.Schools = resp
    // let listado = resp
    console.log("listado", this.Schools)
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
