import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgIf, NgFor } from '@angular/common';
import { FetchApiService } from 'src/app/services/fetch-api.service';
import { ICategory } from 'src/app/interface/i-category';

@Component({
  selector: 'app-carousel-main',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    NgbCarouselModule,
  ],
  providers: [NgbCarouselConfig],
  templateUrl: './carousel-main.component.html',
  styleUrls: ['./carousel-main.component.scss']
})
export class CarouselMainComponent implements OnInit {
  public fetchCategoryRes: ICategory | any = [];

  constructor(
    private fetchApiService: FetchApiService,
    public ngbCarouselConfig: NgbCarouselConfig
    ) {
    ngbCarouselConfig.showNavigationIndicators = false
  }

  ngOnInit(): void {
    this.catchCategorias()
  }

  public catchCategorias() {
    this.fetchApiService.getCategory().subscribe(
      (res) => {
        this.fetchCategoryRes = res
        console.log(this.fetchCategoryRes)
      }
    )
  }
}
