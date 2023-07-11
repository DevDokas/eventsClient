import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IEvent } from '../interface/i-event';

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

  public putEvent(
    id: number,
    nome: string,
    categoria: string,
    descricao: string,
    imagem: string,
    ): Observable<IEvent> {
      return this.http.put<IEvent>(`${this.baseUrl}${this.eventRoute}${id}`, {
        nome: nome,
        categoria: categoria,
        descricao: descricao,
        imagem: imagem,
        atualizado_em: Date.now()
      })
    }

  public deleteEvent(id: number): Observable<IEvent> {
    return this.http.delete<IEvent>(`${this.baseUrl}${this.eventRoute}${id}`)
  }

  public postEvent(
    nome: string,
    categoria: string,
    descricao: string,
    imagem: string,
    ): Observable<IEvent> {
    return this.http.post<IEvent>(`${this.baseUrl}${this.eventRoute}`, {
      nome: nome,
      categoria: categoria,
      descricao: descricao,
      imagem: imagem,
      criado_em: Date.now(),
      atualizado_em: Date.now()
    })
  }

  public getEvents(): Observable<Array<IEvent>> {
    return this.http.get<Array<IEvent>>(`${this.baseUrl}${this.eventRoute}`)
  }

  public getEventInfo(id: string): Observable<Array<IEvent>> {
    return this.http.get<Array<IEvent>>(`${this.baseUrl}${this.eventRoute}${id}`)
  }
}