import { Component, OnInit } from "@angular/core";
import { DocsService } from "src/app/services/docs.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Endpoints } from "../../services/endpoints";
import { Storage } from "@ionic/storage";
import { TabsPage } from '../tabs/tabs.page';

@Component({
  selector: "app-profile-favs",
  templateUrl: "./profile-favs.page.html",
  styleUrls: ["./profile-favs.page.scss"],
})
export class ProfileFavsPage implements OnInit {
  Favorites: any;
  id: number;
  info: any;
  quizId: number;

  constructor(
    private docsService: DocsService,
    private http: HttpClient,
    private endpoints: Endpoints,
    private storage: Storage,
    private tabsPage: TabsPage,
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
        this.getFavorites(this.id).subscribe( resp => {
          this.Favorites = resp
         })
      });
  }

  getFavorites(id) {
    this.id = id;
    return this.http.get(this.endpoints.FAVORITES_ENDPOINT + "/" + this.id);
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

  openFirst(){
    this.tabsPage.openFirst()
  }
}
