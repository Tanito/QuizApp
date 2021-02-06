import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocsService {

  constructor(private http: HttpClient) { }

  getSchools(){
    return this.http.get('https://apiquizzes.herokuapp.com/org')

   } 

 

}
