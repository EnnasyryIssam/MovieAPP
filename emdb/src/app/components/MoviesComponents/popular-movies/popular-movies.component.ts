import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../../../tmdb.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css'],
})
export class PopularMoviesComponent implements OnInit {
  movies: any[] = [];

  constructor(private tmdbService: TmdbService) {}

  ngOnInit(): void {
    this.tmdbService.getPopularMovies().subscribe((data) => {
      this.movies = data.results.slice(0, 10);
    });
  }
}
