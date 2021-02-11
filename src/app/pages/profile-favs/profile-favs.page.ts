import { Component, OnInit } from "@angular/core";
import { DocsService } from "src/app/services/docs.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Endpoints } from "../../services/endpoints";
import { Storage } from "@ionic/storage";
import { TabsPage } from '../tabs/tabs.page';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: "app-profile-favs",
  templateUrl: "./profile-favs.page.html",
  styleUrls: ["./profile-favs.page.scss"],
})
export class ProfileFavsPage implements OnInit {
  Favorites: any;
  vacio: boolean = false;
  id: number;
  info: any;
  quizId: number;
  quizName: string;

  constructor(
    private docsService: DocsService,
    private http: HttpClient,
    private endpoints: Endpoints,
    private storage: Storage,
    private tabsPage: TabsPage,
    public alertController: AlertController,
    private router: Router,
  ) {}

  ngOnInit() {
     this.cargarStorage();
  }

  ionViewWillEnter() {
    this.cargarStorage();
    console.log("Favoritos", this.Favorites, this.vacio)
    // console.log("PRUEBA", (this.Favorites === undefined))
    if (this.Favorites === undefined) return this.vacio === true;
    if (this.Favorites !== undefined) return this.vacio === false;
  }

  cargarStorage() {
    this.storage
      .get("User")
      .then((val) => {
        this.id = val.user.id;
      })
      .then((f) => {
        this.getFavorites(this.id).subscribe( resp => {
          this.Favorites = resp
          if (this.Favorites.length === 0) {this.vacio = true }
         })
      });
  }

  getFavorites(id) {
    this.id = id;
    return this.http.get(this.endpoints.FAVORITES_ENDPOINT + "/" + this.id);
  }

  remove(userId, quizId, name){
    console.log("user & quiz ids", userId, quizId)
    const body = {UserId: userId, QuizId: quizId }
    console.log("UserID",userId,"QuizId", quizId)
    this.http.request("delete", this.endpoints.ROLE_ENDPOINT, { body }
   ).subscribe(data => {
      this.info = data;
      console.log("info devuelta", this.info)
     })
     this.presentAlert(name)
     this.router.navigateByUrl('/tabs/profile-favs')
     this.ionViewWillEnter()
  }

  async presentAlert(name) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'QuizApp',
      // subHeader: 'Subtitle',
      message: 'El quizz '+ name +' se quitó de favoritos!',
      buttons: ['OK']
    });
  
    await alert.present();
  }

  openFirst(){
    this.tabsPage.openFirst()
  }
}
