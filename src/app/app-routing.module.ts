import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { EventDetailPageComponent } from './pages/event-detail-page/event-detail-page.component';
import { CategoryPageComponent } from './pages/admin-page/category-page/category-page.component';
import { CategoryDetailPageComponent } from './pages/category-detail-page/category-detail-page.component';
import { AdminComponent } from './pages/admin-page/admin/admin.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomePageComponent,
    title: "+Eventos"
  },
  {
    path: "evento",
    component: MainPageComponent,
    title: "Eventos"
  },
  {
    path: "evento/:id",
    component: EventDetailPageComponent
  },
  {
    path: "categoria/:id",
    component: CategoryDetailPageComponent,
    title: "Categorias"
  },
  {
    path: "admin/evento",
    component: AdminComponent,
    title: "Painel Administrativo"
  },
  {
    path: "admin/evento/categoria",
    component: CategoryPageComponent,
    title: "Painel Administrativo"
  },
  {
    path: "**",
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
