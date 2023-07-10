import { Component, OnInit } from '@angular/core';
import { FetchApiService } from 'src/app/services/fetch-api.service';
import { IEvent } from 'src/app/interface/i-event';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  protected inputNome: string = "";
  protected inputCategoria: string = "";
  protected inputDescricao: string = "";
  protected inputImagem: string = "";
  protected inputCriadoEm: string = "";

  public fetchRes: IEvent | any = [];

  constructor(private fetchApiService: FetchApiService) { }

  ngOnInit(): void {
    this.catchEventos()
  }

  public catchEventos() {
    this.fetchApiService.getEvents().subscribe((res) => {
      this.fetchRes = res
      console.log(res)
    })
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
}
