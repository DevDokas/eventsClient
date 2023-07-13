import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { FontAwesome6Module } from '../components/font-awesome6/font-awesome6.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselCategoriesHolderComponent } from './carousel-categories-holder/carousel-categories-holder.component';
import { CarouselMainComponent } from './carousel-main/carousel-main.component';
@NgModule({
  declarations: [
    MenuComponent,
    CarouselCategoriesHolderComponent,

  ],
  exports: [
    MenuComponent,
    CarouselMainComponent,
    CarouselCategoriesHolderComponent
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
