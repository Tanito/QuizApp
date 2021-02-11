import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Endpoints } from "../../services/endpoints";
import { Storage } from "@ionic/storage";
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: "app-enrolled-quizzes",
  templateUrl: "./enrolled-quizzes.page.html",
  styleUrls: ["./enrolled-quizzes.page.scss"],
})
export class ProfileEnrolledQuizzesPage implements OnInit {
  EnrolledQuizzes: any;
  vacio: boolean = false;
  id: number;
  info: any;
  quizId: number;
  
  constructor(
    private http: HttpClient,
    private endpoints: Endpoints,
    private storage: Storage,
    public alertController: AlertController,
    private router: Router,
  ) {}

  ngOnInit() {
    this.cargarStorage();
  }

  ionViewWillEnter() {
    this.cargarStorage();
    // console.log("Favoritos", this.Favorites, this.vacio)
    // console.log("PRUEBA", (this.Favorites === undefined))
    if (this.EnrolledQuizzes === undefined) return this.vacio === true;
    if (this.EnrolledQuizzes !== undefined) return this.vacio === false;
  }

  cargarStorage() {
    this.storage
      .get("User")
      .then((val) => {
        this.id = val.user.id;
      })
      .then((f) => {
        this.getEnrolledQuizzes(this.id).subscribe( resp => {
          console.log('resp', resp)
          this.EnrolledQuizzes = resp
          if (this.EnrolledQuizzes.length === 0) {this.vacio = true }
        })
         
      });
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
     this.router.navigateByUrl('/tabs/enrolled-quizzes')
     this.ionViewWillEnter()
  }

  async presentAlert(name) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'QuizApp',
      // subHeader: 'Subtitle',
      message: 'Ha retirado la inscripción del quiz '+ name +'!',
      buttons: ['OK']
    });
  
    await alert.present();
  }
  getEnrolledQuizzes(id) {
    this.id = id;
    return this.http.get(this.endpoints.ENROLLED_ENDPOINT + "/" + this.id);
  }
}