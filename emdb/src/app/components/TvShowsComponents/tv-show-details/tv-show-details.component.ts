import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from '../../../tmdb.service';
@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.css'],
})
export class TvShowDetailsComponent implements OnInit {
  tv: any;
  cast: any;
  trailerKey: string = '';

  constructor(
    private route: ActivatedRoute,
    private tmdbService: TmdbService
  ) {}

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10); // <-- convertit l'ID en nombre
    this.tmdbService.getTvShowDetails(id).subscribe((data) => {
      this.tv = data;
      this.tmdbService.getTvShowGenres(id).subscribe((genres) => {
        this.tv.genres = genres;
      });
      this.tmdbService.getTvShowCredits(id).subscribe((actors) => {
        this.cast = actors.cast.slice(0, 10);
      });
      this.tmdbService.getTvShwoVideos(id).subscribe((videoKey) => {
        this.trailerKey = videoKey;
      });
    });
  }
}
