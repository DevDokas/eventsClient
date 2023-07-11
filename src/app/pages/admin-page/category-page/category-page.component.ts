import { Component, OnInit } from '@angular/core';
import { FetchApiService } from 'src/app/services/fetch-api.service';
import { ICategory } from 'src/app/interface/i-category';
import { Location } from '@angular/common';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {

  protected postModalActivated: boolean;
  protected putModalActivated: boolean;
  protected putModalId: number;

  protected categoryInfoModal: boolean;
  protected categoryInfoId: number;

  public fetchCategoryRes: ICategory | any = [];

  constructor(private fetchApiService: FetchApiService, private _location: Location) {
    this.postModalActivated = false;
    this.putModalActivated = false;
    this.putModalId = 0;

    this.categoryInfoModal = false;
    this.categoryInfoId = 0;
  }

  ngOnInit(): void {
    this.catchCategorias()
  }

  catchCategorias() {
    this.fetchApiService.getCategory().subscribe(
      (res) => {
        this.fetchCategoryRes = res
        console.log(this.fetchCategoryRes)
      }
    )
  }

  public handleDeleteCategory(id: number) {
    window.location.reload()
    return this.fetchApiService.deleteCategory(id).subscribe(
      (res) => {res}
    )
  }

  public handlePutCategory(
    id: number,
    nome: string,
    descricao: string,
    imagem: string
    ) {
    window.location.reload()
    return this.fetchApiService.putCategory(id, nome, descricao, imagem).subscribe(
      (res) => {res}
    )
  }

  public handlePostCategory(
    nome: string,
    descricao: string,
    imagem: string
    ) {
    window.location.reload()
    return this.fetchApiService.postCategory(nome, descricao, imagem).subscribe(
      (res) => {res}
    )
  }

  public infoModal(id: number) {
    this.categoryInfoId = id
    this.categoryInfoModal = !this.categoryInfoModal
  }

  public postModal() {
    this.postModalActivated = !this.postModalActivated
  }

  public putModal(id: number) {
    this.putModalId = id
    this.putModalActivated = !this.putModalActivated
  }

  public returnRoute() {
    this._location.back()
  }
}
