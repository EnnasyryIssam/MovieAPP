import { Component, OnInit } from '@angular/core';
import { TmdbService } from 'src/app/tmdb.service';
@Component({
  selector: 'app-popular-tv-shows',
  templateUrl: './popular-tv-shows.component.html',
  styleUrls: ['./popular-tv-shows.component.css']
})
export class PopularTvShowsComponent implements OnInit {

  tvShows: any[] = [];

  constructor(private tmdbService: TmdbService) {}

  ngOnInit(): void {
    this.tmdbService.getPopularTvShows().subscribe((data) => {
      this.tvShows = data.results.slice(0, 10);
    });
  }

}
