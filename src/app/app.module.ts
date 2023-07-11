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
import { FontAwesome6Module } from './icon-modules/font-awesome6/font-awesome6.module';
import { SharedModule } from './shared/shared.module';
import { CategoryPageComponent } from './pages/admin-page/category-page/category-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MainPageComponent,
    ErrorPageComponent,
    EventDetailPageComponent,
    AdminComponent,
    CategoryPageComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesome6Module,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
