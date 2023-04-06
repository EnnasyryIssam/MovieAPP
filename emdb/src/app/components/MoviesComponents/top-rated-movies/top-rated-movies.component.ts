import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../../../tmdb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.css'],
})
export class TopRatedMoviesComponent implements OnInit {
  top_rated: any[] = [];

  constructor(private tmdbService: TmdbService, private router: Router) {}

  ngOnInit(): void {
    this.tmdbService.getToRatedMovies().subscribe((data) => {
      this.top_rated = data.results.slice(0, 5);
    });
  }
}
