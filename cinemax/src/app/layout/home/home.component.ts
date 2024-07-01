import { Component, OnInit } from '@angular/core';

import { Movie } from 'src/app/models/Movie';
import { ApiService } from 'src/app/shared/services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];  // Array de filmes para exibição

  constructor(private apiService: ApiService, private router: Router) {} // contructor é usado para injeção de dependência no Angular

  verDetalhes(id: number): void {
    this.router.navigate(['movie', id]);
  }

  // Método de ciclo de vida do Angular, executado quando o componente é inicializado
  ngOnInit(): void {
    this.listar();  // Chama o método listar para buscar os filmes
  }

  // Método que faz a requisição à API e atualiza a lista de filmes
  listar(): void {
    this.apiService.getMovies().subscribe({
      next: (data: Movie[]) => {
        console.log('Dados recebidos da API:', data); // Log dos dados recebidos
        this.movies = data; // Atualiza a lista de filmes
        // this.movieLast = data;
      },
      error: (error) => {
        console.error('Erro ao buscar filmes:', error);   // Log de erro caso a requisição falha
      }
    });
}
}
