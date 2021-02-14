import { Injectable } from '@angular/core';
import { Endpoints } from "./endpoints";
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(
    private http: HttpClient,
    private endpoints: Endpoints,
  ) { }

  callSubjectsStats(id){
    return this.http.get(this.endpoints.BASE_ENDPOINT + '/mobile/tags/' + id)
  }

  callStats(id){
    return this.http.get(this.endpoints.GET_STATS_ENDPOINT + '/' + id)
  }
}
