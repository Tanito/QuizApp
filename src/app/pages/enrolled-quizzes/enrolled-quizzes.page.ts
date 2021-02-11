import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Endpoints } from "../../services/endpoints";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-enrolled-quizzes",
  templateUrl: "./enrolled-quizzes.page.html",
  styleUrls: ["./enrolled-quizzes.page.scss"],
})
export class ProfileEnrolledQuizzesPage implements OnInit {
  EnrolledQuizzes: any;
  id: number;
  info: any;

  constructor(
    private http: HttpClient,
    private endpoints: Endpoints,
    private storage: Storage
  ) {}

  ngOnInit() {
    this.cargarStorage();
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
         })
      });
  }

  remove(userId, quizId){
    console.log("user & quiz ids", userId, quizId)
    const body = {UserId: userId, QuizId: quizId }
    console.log("UserID",userId,"QuizId", quizId)
    this.http.request("delete", this.endpoints.ROLE_ENDPOINT, { body }
   ).subscribe(data => {
      this.info = data;
      console.log("info devuelta", this.info)
     })
  }

  getEnrolledQuizzes(id) {
    this.id = id;
    return this.http.get(this.endpoints.ENROLLED_ENDPOINT + "/" + this.id);
  }
}