import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/interface/i-category';
import { FetchApiService } from 'src/app/services/fetch-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-detail-page',
  templateUrl: './category-detail-page.component.html',
  styleUrls: ['./category-detail-page.component.scss']
})
export class CategoryDetailPageComponent implements OnInit {

  public fetchRes: ICategory | any = []

  public categoryId: string = "";

  constructor(
    private fetchApiService: FetchApiService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(
      (params) => this.categoryId = params['id']
    )
  }

  ngOnInit(): void {
    console.log(this.categoryId.toString())
    this.catchCategoriaInfo(this.categoryId)
  }

  catchCategoriaInfo(id: string) {
    this.fetchApiService.getCategoryInfo(id).subscribe(
      (res) => {
        this.fetchRes = res
        console.log(this.fetchRes)
      }
    )
  }

}
