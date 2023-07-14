import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/interface/i-category';
import { FetchApiService } from 'src/app/services/fetch-api.service';
import { ActivatedRoute } from '@angular/router';
import { IEventsByCategory } from 'src/app/interface/ievents-by-category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-detail-page',
  templateUrl: './category-detail-page.component.html',
  styleUrls: ['./category-detail-page.component.scss']
})
export class CategoryDetailPageComponent implements OnInit {

  public fetchCategoriaRes: ICategory | any = []
  public fetchEventsByCategoyRes: IEventsByCategory[] | any = []

  public categoryId: string = "";

  constructor(
    private fetchApiService: FetchApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(
      (params) => this.categoryId = params['id']
    )
  }

  ngOnInit(): void {
    console.log(this.categoryId.toString())
    this.catchCategoriaInfo(this.categoryId)
    this.catchEventoByCategoria()
  }

  catchCategoriaInfo(id: string) {
    this.fetchApiService.getCategoryInfo(id).subscribe(
      (res) => {
        this.fetchCategoriaRes = res
        console.log(this.fetchCategoriaRes)
      }
    )
  }

  catchEventoByCategoria() {
    this.fetchApiService.getEventsByCategory().subscribe(
      (res) => {
        this.fetchEventsByCategoyRes = res
        console.log(this.fetchEventsByCategoyRes)
      }
    )
  }

  visitEventos(id: string) {
    this.router.navigate([`/evento/${id}`])
  }
}
