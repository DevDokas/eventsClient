import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Route Module
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { EventDetailPageComponent } from './pages/event-detail-page/event-detail-page.component';
import { AdminComponent } from './pages/admin-page/admin/admin.component';

// Modules
import { FontAwesome6Module } from './components/font-awesome6/font-awesome6.module';
import { SharedModule } from './shared/shared.module';
import { CategoryPageComponent } from './pages/admin-page/category-page/category-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from './components/card/card.component';
import { CategoryDetailPageComponent } from './pages/category-detail-page/category-detail-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MainPageComponent,
    ErrorPageComponent,
    EventDetailPageComponent,
    AdminComponent,
    CategoryPageComponent,
    CardComponent,
    CategoryDetailPageComponent,
    AboutPageComponent,
  ],
  imports: [
    SharedModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesome6Module,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
