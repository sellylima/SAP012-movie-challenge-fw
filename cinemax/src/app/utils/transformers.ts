// Implementação da Função - Transformação dos dados criado no arquivo models/Movie
// import { Genre } from 'src/models/Genre';
import { Movie } from 'src/app/models/Movie';


 const formatMovie = (rawData: any, genresMap: Map<number, string>): Movie => {

  const baseUrl = 'https://image.tmdb.org/t/p/w500';
  const genres: string[] = rawData.genre_ids ? rawData.genre_ids.map((genreId: number) => genresMap.get(genreId) || 'Gênero não encontrado!') : ['Gênero não disponível'];

  return {
    title: rawData.title,
    poster_path: `${baseUrl}${rawData.poster_path}`,
    release_year: new Date (rawData.release_date).getFullYear(),
    id: rawData.id,
    overview: rawData.overview,
    genres
  };
}

export function formatGenresToMap(genresData: { id: number, name: string }[]): Map<number, string> {
  return new Map(genresData.map(genre => [genre.id, genre.name]));
}

export function formatGenresToOptions(genresData: {id: number, name: string }[]): Array<{value: string, label:string}> {
  return genresData.map(genre => ({
    value:genre.id.toString(),
    label: genre.name
  }));
}

export { formatMovie };