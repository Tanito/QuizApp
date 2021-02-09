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

  getEnrolledQuizzes(id) {
    this.id = id;
    return this.http.get(this.endpoints.ENROLLED_ENDPOINT + "/" + this.id);
  }
}