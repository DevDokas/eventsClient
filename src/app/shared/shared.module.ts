import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { FontAwesome6Module } from '../components/font-awesome6/font-awesome6.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselMainComponent } from './carousel-main/carousel-main.component';
import { CarouselEventsByCategoriesComponent } from './carousel-events-by-categories/carousel-events-by-categories.component';
import { CarouselCategoriesComponent } from './carousel-categories/carousel-categories.component';
@NgModule({
  declarations: [
    MenuComponent,
    CarouselCategoriesComponent,
    CarouselEventsByCategoriesComponent,

  ],
  exports: [
    MenuComponent,
    CarouselMainComponent,
    CarouselCategoriesComponent,
    CarouselEventsByCategoriesComponent,
  ],
  imports: [
    CarouselMainComponent,
    CommonModule,
    RouterModule,
    CarouselModule,
    FontAwesome6Module,
    NgbAlertModule,
    NgbModule,
  ]
})
export class SharedModule { }
