import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from "./endpoints";

@Injectable({
  providedIn: 'root'
})
export class DocsService {

  constructor(private http: HttpClient, private endpoints: Endpoints) { }

  getSchools(){
    return this.http.get(this.endpoints.SCHOOL_ENDPOINT)

   } 

}
