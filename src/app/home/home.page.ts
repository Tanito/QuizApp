import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  /* darkMode: boolean = true; */

  constructor() {
/*     const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    this.darkMode = prefersDark.matches; */
  }
/*   // funcion para cambiar el modo desde el toggle
  change() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle("dark");
  } */
}
