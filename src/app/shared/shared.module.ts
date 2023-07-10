import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { FontAwesome6Module } from '../icon-modules/font-awesome6/font-awesome6.module';


@NgModule({
  declarations: [
    MenuComponent
  ],
  exports: [
    MenuComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesome6Module
  ]
})
export class SharedModule { }
