import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { FontAwesome6Module } from '../icon-modules/font-awesome6/font-awesome6.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselHolderComponent } from './carousel-holder/carousel-holder.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselCategoriesHolderComponent } from './carousel-categories-holder/carousel-categories-holder.component';
@NgModule({
  declarations: [
    MenuComponent,
    CarouselCategoriesHolderComponent,
  ],
  exports: [
    MenuComponent,
    CarouselHolderComponent,
    CarouselCategoriesHolderComponent
  ],
  imports: [
    CarouselHolderComponent,
    CommonModule,
    RouterModule,
    CarouselModule,
    FontAwesome6Module,
    NgbAlertModule,
    NgbModule,
  ]
})
export class SharedModule { }
