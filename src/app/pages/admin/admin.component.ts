import { Component, OnInit } from '@angular/core';
import { FetchApiService } from 'src/app/services/fetch-api.service';
import { IEvent } from 'src/app/interface/i-event';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  protected postModalActivated: boolean;
  protected putModalActivated: boolean;
  protected putModalId: number;

  protected inputNome: string = "";
  protected inputCategoria: string = "";
  protected inputDescricao: string = "";
  protected inputImagem: string = "";
  protected inputCriadoEm: string = "";

  public fetchRes: IEvent | any = [];

  constructor(private fetchApiService: FetchApiService) {
    this.postModalActivated = false;
    this.putModalActivated = false;
    this.putModalId = 0;
  }

  ngOnInit(): void {
    this.catchEventos()
  }

  public catchEventos() {
    this.fetchApiService.getEvents().subscribe((res) => {
      this.fetchRes = res
      console.log(res)
    })
  }

  public handlePutEvent(
    id: number,
    nome: string,
    categoria: string,
    descricao: string,
    imagem: string
    ) {
    window.location.reload()
    return this.fetchApiService.putEvent(
      id,
      nome,
      categoria,
      descricao,
      imagem
      ).subscribe(
        (res) => {res}
      )
  }

  public handleDeleteEvent(id: number) {
    window.location.reload()
    return this.fetchApiService.deleteEvent(id).subscribe(
      (res) => {res}
    )
  }

  public handlePostEvent(
    nome: string,
    categoria: string,
    descricao: string,
    imagem: string
    ) {
    window.location.reload()
    return this.fetchApiService.postEvent(nome, categoria, descricao, imagem).subscribe(
      (res) => {res}
    )
  }

  public postModal() {
    this.postModalActivated = !this.postModalActivated
  }

  public putModal(id: number) {
    this.putModalId = id
    this.putModalActivated = !this.putModalActivated
  }
}
