import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../../../tmdb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-rated-tv-shows',
  templateUrl: './top-rated-tv-shows.component.html',
  styleUrls: ['./top-rated-tv-shows.component.css']
})
export class TopRatedTvShowsComponent implements OnInit {

  top_rated: any[] = [];

  constructor(private tmdbService: TmdbService, private router: Router) {}

  ngOnInit(): void {
    this.tmdbService.getToRatedTvShows().subscribe((data) => {
      this.top_rated = data.results.slice(0, 6);
    });
  }

}
