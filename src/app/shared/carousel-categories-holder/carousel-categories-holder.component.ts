import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o'
import { FetchApiService } from 'src/app/services/fetch-api.service';
import { ICategory } from 'src/app/interface/i-category';

@Component({
  selector: 'app-carousel-categories-holder',
  templateUrl: './carousel-categories-holder.component.html',
  styleUrls: ['./carousel-categories-holder.component.scss']
})
export class CarouselCategoriesHolderComponent implements OnInit {

  public fetchCategoryRes: ICategory | any = [];
  public fetchEventsRes: ICategory | any = [];

  sliderWidth: number = window.innerWidth;
  sliderHeight: number = window.innerHeight;

  public customOptions: any = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      nav: false,
      navPosition: 'center',
      navSpeed: 700,
      navText: ['<', '>'],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 4
        }
      }
  }


  constructor(private fetchApiService: FetchApiService) { }

  ngOnInit(): void {
    this.catchEventos()
    this.catchCategorias()
  }

  public catchEventos() {
    this.fetchApiService.getEvents().subscribe(
      (res) => {
        this.fetchEventsRes = res
        console.log(this.fetchEventsRes)
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

}
