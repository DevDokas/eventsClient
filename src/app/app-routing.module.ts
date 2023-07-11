import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { EventDetailPageComponent } from './pages/event-detail-page/event-detail-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { CategoryPageComponent } from './pages/admin-page/category-page/category-page.component';
import { AdminComponent } from './pages/admin-page/admin/admin.component';
const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomePageComponent
  },
  {
    path: "main",
    component: MainPageComponent,
  },
  {
    path: "main/:id",
    component: EventDetailPageComponent
  },
  {
    path: "admin/evento",
    component: AdminComponent
  },
  {
    path: "admin/evento/categoria",
    component: CategoryPageComponent
  },
  {
    path: "**",
    component: ErrorPageComponent
  },
  {
    path: "main/**",
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
