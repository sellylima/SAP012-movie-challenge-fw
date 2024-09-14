import { Component, Input } from '@angular/core';

import { Movie } from 'src/app/models/Movie';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
   @Input()movie!: Movie;

  constructor(private apiService: ApiService) {}
  ngOnInit(): void {}
}
