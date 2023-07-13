import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o'
import { FetchApiService } from 'src/app/services/fetch-api.service';
import { ICategory } from 'src/app/interface/i-category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel-categories',
  templateUrl: './carousel-categories.component.html',
  styleUrls: ['./carousel-categories.component.scss']
})
export class CarouselCategoriesComponent implements OnInit {
  public isDragging: boolean = false;

  public fetchCategoryRes: ICategory[] = [];

  public customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    nav: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 5
      }
    }
}

  constructor(
    private router: Router,
    private fetchApiService: FetchApiService
    ) { }

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
