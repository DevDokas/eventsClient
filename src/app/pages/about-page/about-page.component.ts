import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  readonly bannerImage: string;

  constructor() {
    this.bannerImage = "https://www.ofertaprint.com.br/wp-content/webp-express/webp-images/uploads/2023/05/Design-sem-nome-3.png.webp"
  }

  ngOnInit(): void {
  }

}
