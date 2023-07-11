import { Component, OnInit } from '@angular/core';
import { FetchApiService } from 'src/app/services/fetch-api.service';
import { IEvent } from 'src/app/interface/i-event';
import { ICategory } from 'src/app/interface/i-category';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  protected postModalActivated: boolean;
  protected putModalActivated: boolean;
  protected putModalId: number;

  protected eventInfoModal: boolean;
  protected eventInfoId: number;

  protected inputNome: string = "";
  protected inputCategoria: string = "";
  protected inputDescricao: string = "";
  protected inputImagem: string = "";
  protected inputCriadoEm: string = "";

  public fetchEventRes: IEvent | any = [];
  public fetchCategoryRes: ICategory | any = [];

  constructor(private fetchApiService: FetchApiService) {
    this.postModalActivated = false;
    this.putModalActivated = false;
    this.putModalId = 0;

    this.eventInfoModal = false;
    this.eventInfoId = 0;
  }

  ngOnInit(): void {
    this.catchEventos()
    this.catchCategorias()
  }

  public catchEventos() {
    this.fetchApiService.getEvents().subscribe(
      (res) => {
      this.fetchEventRes = res
      console.log(this.fetchEventRes)
      }
    )
  }

  public catchCategorias() {
    this.fetchApiService.getCategory().subscribe(
      (res) => {
        this.fetchCategoryRes = res
        console.log(this.fetchCategoryRes)
      }
    )
  }

  public handlePutEvent(
    id: number,
    nome: string,
    categoria_id: number,
    descricao: string,
    imagem: string
    ) {
    window.location.reload()
    return this.fetchApiService.putEvent(
      id,
      nome,
      categoria_id,
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
    categoria_id: number,
    descricao: string,
    imagem: string
    ) {
    window.location.reload()
    return this.fetchApiService.postEvent(nome, categoria_id, descricao, imagem).subscribe(
      (res) => {res}
    )
  }

  public infoModal(id: number) {
    this.eventInfoId = id;
    this.eventInfoModal = !this.eventInfoModal
  }

  public postModal() {
    this.postModalActivated = !this.postModalActivated
  }

  public putModal(id: number) {
    this.putModalId = id
    this.putModalActivated = !this.putModalActivated
  }
}
