import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FetchApiService{

  readonly baseUrl = environment.API_URL;

  readonly eventRoute: string;

  private request: Object = [];

  constructor(private http: HttpClient) {
    this.eventRoute = '/evento/'
  }

  public getEvents() {
    return this.http.get(`${this.baseUrl}${this.eventRoute}`)
  }

  public getEventInfo(id: string) {
    return this.http.get(`${this.baseUrl}${this.eventRoute}${id}`)
  }
}
