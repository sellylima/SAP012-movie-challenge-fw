import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieCardComponent } from './layout/movie-card/movie-card.component';
import { ApiService } from './shared/services/api.service';
import { HomeComponent } from './layout/home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { MovieDetailComponent } from './layout/movie-detail/movie-detail.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { BannerComponent } from './layout/banner/banner.component';
import { SearchComponent } from './layout/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    MovieDetailComponent,
    NavbarComponent,
    BannerComponent,
    SearchComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, CommonModule, FormsModule],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
