import { Component, OnInit } from '@angular/core';
import { TmdbService } from 'src/app/tmdb.service';
@Component({
  selector: 'app-trendingd-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: ['./trending-movies.component.css']
})
export class TrendingdMoviesComponent implements OnInit {

  movies: any[] = [];

  constructor(private tmdbService: TmdbService) {}

  ngOnInit(): void {
    this.tmdbService.getTrendingMovies().subscribe((data) => {
      this.movies = data.results.slice(0, 10);
    });
  }

}
