import { Injectable } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Movie } from 'src/app/models/Movie';
import { formatMovie, formatGenresToMap } from 'src/app/utils/transformers';
import { Genre } from '../../models/Genre';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = 'https://api.themoviedb.org/3';
  genres: Genre[] = [];

  getMovieDetail(id: number): Observable<Movie> {
    // metodo getMovieDetail ok
    return this.getMovieGenres().pipe(
      switchMap(genresArray => {
        const genresMap = formatGenresToMap(genresArray);

        const url = `https://api.themoviedb.org/3/movie/${id}`;
        const headers = {
          'Authorization': `Bearer ${environment.TOKEN_API}`,
        };

        return this.http.get<any>(url, { headers }).pipe(
          map(apiMovieData => formatMovie(apiMovieData, genresMap))
        );
      })
    );
  }

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${environment.TOKEN_API}` // Corrigido o cabeçalho de autorização
    );
    return this.getMovieGenres().pipe(
      map(formatGenresToMap),
      switchMap((genresMap) =>
        this.http
          .get<{ results: any[] }>(`${this.apiUrl}/discover/movie`, { headers })
          .pipe(
            map((response) =>
              response.results.map((rawData) => formatMovie(rawData, genresMap))
            )
          )
      )
    );
  }

  getMovieGenres(): Observable<Genre[]> {
    // Corrigido o endpoint da API para buscar gêneros de filmes
    const url = `${this.apiUrl}/genre/movie/list`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${environment.TOKEN_API}`, // Corrigido o cabeçalho de autorização
    });

    return this.http
      .get<{ genres: Genre[] }>(url, { headers })
      .pipe(map((response) => response.genres));
  }
}
