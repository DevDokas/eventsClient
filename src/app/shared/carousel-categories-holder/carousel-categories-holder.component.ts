import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o'
import { FetchApiService } from 'src/app/services/fetch-api.service';
import { IEventsByCategory } from 'src/app/interface/ievents-by-category';
import { ICategory } from 'src/app/interface/i-category';
import { IEvent } from 'src/app/interface/i-event';


@Component({
  selector: 'app-carousel-categories-holder',
  templateUrl: './carousel-categories-holder.component.html',
  styleUrls: ['./carousel-categories-holder.component.scss']
})
export class CarouselCategoriesHolderComponent implements OnInit {

  public fetchCategoryRes: ICategory[] = [];
  public fetchEventsRes: IEvent[] = [];
  public fetchEventsByCategoryRes: IEventsByCategory[] = [];

  sliderWidth: number = window.innerWidth;
  sliderHeight: number = window.innerHeight;

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
    this.catchEventosByCategoria()
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

  public catchEventosByCategoria() {
    this.fetchApiService.getEventsByCategory().subscribe(
      (res) => {
        this.fetchEventsByCategoryRes = res
        console.log(this.fetchEventsByCategoryRes)
      }
    )
  }

}
