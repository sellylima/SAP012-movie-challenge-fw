
import { Component, Input, OnInit } from '@angular/core'; 
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from './../../shared/services/api.service';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
@Input() movie: Movie | undefined;  
loading: boolean = false;
error: string = '';

constructor(private location: Location, private apiService: ApiService, private route: ActivatedRoute) {}

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.loading = true;
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.apiService.getMovieDetail(+id).subscribe({
        next: (movie) => {
          this.movie = movie;
          this.loading = false;
        },
        error: (error) => {
          this.error = 'Erro ao obter detalhes do filme';
          this.loading = false;
        }
      });
    }
  }
  }


