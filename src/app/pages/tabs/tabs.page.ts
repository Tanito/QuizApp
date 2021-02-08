import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  darkMode: boolean = true;
  isHide = [false,true]
  isHide2: true

  constructor(private menu: MenuController) { 
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    this.darkMode = prefersDark.matches;
   }

     // funcion para cambiar el modo desde el toggle
  change() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle("dark");
  }

  ngOnInit() {
  }
  // getQuizzes(){
  //   return this.http.get(this.endpoints.MOBILE_QUIZZES_ENDPOINT + this.id)

  //  } 
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

 closeFirst() {
    this.menu.enable(true, 'first');
    this.menu.close('first');
  }

  hideSection(i: number){
    this.isHide[i] = !this.isHide[i]
  }


}
