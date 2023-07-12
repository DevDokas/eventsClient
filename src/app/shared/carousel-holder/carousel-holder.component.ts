import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o'
import { NgbCarouselModule, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-carousel-holder',
  standalone: true,
  imports: [
    NgIf,
    NgbCarouselModule,
  ],
  providers: [NgbCarouselConfig],
  templateUrl: './carousel-holder.component.html',
  styleUrls: ['./carousel-holder.component.scss']
})
export class CarouselHolderComponent implements OnInit {

  images: Array<any> = [
    {
      id: 1,
      src: "https://img.freepik.com/fotos-gratis/orador-aplaudindo-o-publico-apos-a-apresentacao-da-conferencia_107420-63802.jpg"
    },
    {
      id: 1,
      src: "https://img.freepik.com/fotos-gratis/orador-aplaudindo-o-publico-apos-a-apresentacao-da-conferencia_107420-63802.jpg"
    },
    {
      id: 1,
      src: "https://img.freepik.com/fotos-gratis/orador-aplaudindo-o-publico-apos-a-apresentacao-da-conferencia_107420-63802.jpg"
    }
  ]

  sliderWidth: number = window.innerWidth;

  public customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplaySpeed: 700,
    items: 1,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['<', '>'],
    nav: false
  }

  constructor(ngbCarouselConfig: NgbCarouselConfig) {
    ngbCarouselConfig.showNavigationIndicators = false
  }

  ngOnInit(): void {
  }

}
