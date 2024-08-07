import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './layout/home/home.component';
import { MovieDetailComponent } from './layout/movie-detail/movie-detail.component';

const routes: Routes = [
    {
        path:'',
        redirectTo: 'home',  // Rota para o componente Home
        pathMatch: 'full'
      },
      {
        path:'home',
        component: HomeComponent  // Rota para o componente Home
      },
      {
        path:'movie/:id',
        component: MovieDetailComponent  // Rota para o componente Home
      }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

 export class AppRoutingModule { }