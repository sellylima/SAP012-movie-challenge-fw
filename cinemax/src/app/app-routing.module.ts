import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './layout/home/home.component';
import { MovieDetailComponent } from './layout/movie-detail/movie-detail.component';
import { SearchComponent } from './layout/search/search.component';

const routes: Routes = [
    {
        path:'',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path:'search/:texto',
        component: SearchComponent
      },
      {
        path:'home',
        component: HomeComponent
      },
      {
        path:'movie/:id',
        component: MovieDetailComponent
      }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

 export class AppRoutingModule { }
