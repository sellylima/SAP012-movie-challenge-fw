import { ApiService } from 'src/app/shared/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  texto:string = '';
  movie: Movie[] = [];

  constructor(private ActivatedRoute: ActivatedRoute, private ApiService:ApiService ) {}

  ngOnInit(): void {

    this.ActivatedRoute.params.subscribe(params=>{

      this.texto = params['texto'];

      this.ApiService.searchMovie(this.texto).subscribe(movie=>{
        // console.log(movie)
        this.movie = movie;
      })

    })

  }


}
