import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MovieCardComponent } from './layout/movie-card/movie-card.component';
import { ApiService } from './shared/services/api.service';
import { HomeComponent } from './layout/home/home.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    HomeComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, HttpClientModule, CommonModule],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
