import { Component, OnInit } from '@angular/core';
import { TmdbService } from 'src/app/tmdb.service';
@Component({
  selector: 'app-trending-tv-shows',
  templateUrl: './trending-tv-shows.component.html',
  styleUrls: ['./trending-tv-shows.component.css'],
})
export class TrendingTvShowsComponent implements OnInit {
  tvShows: any[] = [];
  constructor(private tmdbService: TmdbService) {}

  ngOnInit(): void {
    this.tmdbService.getTrendingTvShows().subscribe((data) => {
      this.tvShows = data.results.slice(0, 10);
    });
  }
}
