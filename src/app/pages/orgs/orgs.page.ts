import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-orgs',
  templateUrl: './orgs.page.html',
  styleUrls: ['./orgs.page.scss'],
})
export class OrgsPage implements OnInit {
      city: string;
  ​    country: string;
  ​    description:string;
  ​    email: string;
  ​    id: number;
  ​    logo: string;
  ​    name: string;

  constructor( private storage: Storage,) { }

  ngOnInit() {
    this.cargarStorage();
  }

  async cargarStorage(){ //Cargo el localStorage
    await this.storage.get('School').then(val => {
     this.id = val.id; 
     this.name= val.name;
     this.email= val.user.email;
     this.logo= val.logo;
      this.description= val.description;    
     this.country= val.country;
     this.city= val.city;
     console.log("id2", this.id)
   })
  //  .then(()=> this.getQuizzes() // una vez que tengo el id, llamo a la api
  //  .subscribe( resp => {
  //  this.Quizzes = resp
    
  //  }))
   }

}
