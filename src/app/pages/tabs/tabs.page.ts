import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  darkMode: boolean = true;
  isHide = [false,true]
  isHide2: true

  constructor(private menu: MenuController,
              private storage: Storage) { 
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

  logout(){
  this.storage.clear();
  }

}
