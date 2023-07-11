import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IEvent } from '../interface/i-event';
import { ICategory } from '../interface/i-category';

@Injectable({
  providedIn: 'root'
})
export class FetchApiService{

  readonly baseUrl = environment.API_URL;

  readonly eventRoute: string;
  readonly categoryRoute: string;

  private request: Object = [];

  constructor(private http: HttpClient) {
    this.eventRoute = '/evento/'
    this.categoryRoute = '/evento/categoria/'
  }

  public deleteCategory(id: number): Observable<ICategory> {
    return this.http.delete<ICategory>(`${this.baseUrl}${this.categoryRoute}${id}`)
  }

  public deleteEvent(id: number): Observable<IEvent> {
    return this.http.delete<IEvent>(`${this.baseUrl}${this.eventRoute}${id}`)
  }

  public putCategory(
    id: number,
    nome: string,
    descricao: string,
    imagem: string
  ): Observable<ICategory> {
    return this.http.put<ICategory>(`${this.baseUrl}${this.categoryRoute}${id}`, {
      nome: nome,
      descricao: descricao,
      imagem: imagem,
      atualizado_em: Date.now()
    })
  }

  public putEvent(
    id: number,
    nome: string,
    categoria_id: number,
    descricao: string,
    imagem: string,
    ): Observable<IEvent> {
      return this.http.put<IEvent>(`${this.baseUrl}${this.eventRoute}${id}`, {
        nome: nome,
        categoria: {
          id: categoria_id
        },
        descricao: descricao,
        imagem: imagem,
        atualizado_em: Date.now()
      })
    }

  public postCategory(
    nome: string,
    descricao: string,
    imagem: string
  ): Observable<ICategory> {
    return this.http.post<ICategory>(`${this.baseUrl}${this.categoryRoute}`, {
      nome: nome,
      descricao: descricao,
      imagem: imagem,
      criado_em: Date.now(),
      atualizado_em: Date.now()
    })
  }

  public postEvent(
    nome: string,
    categoria_id: number,
    descricao: string,
    imagem: string,
  ): Observable<IEvent> {
    return this.http.post<IEvent>(`${this.baseUrl}${this.eventRoute}`, {
      nome: nome,
      categoria: {
        id: categoria_id
      },
      descricao: descricao,
      imagem: imagem,
      criado_em: Date.now(),
      atualizado_em: Date.now()
    })
  }

  public getCategoryInfo(id: string): Observable<Array<ICategory>> {
    return this.http.get<Array<ICategory>>(`${this.baseUrl}${this.categoryRoute}${id}`)
  }

  public getEventInfo(id: string): Observable<Array<IEvent>> {
    return this.http.get<Array<IEvent>>(`${this.baseUrl}${this.eventRoute}${id}`)
  }

  public getCategory(): Observable<Array<ICategory>> {
    return this.http.get<Array<ICategory>>(`${this.baseUrl}${this.categoryRoute}`)
  }

  public getEvents(): Observable<Array<IEvent>> {
    return this.http.get<Array<IEvent>>(`${this.baseUrl}${this.eventRoute}`)
  }
}
