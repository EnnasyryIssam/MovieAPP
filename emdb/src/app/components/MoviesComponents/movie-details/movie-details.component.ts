import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from '../../../tmdb.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movie: any;
  cast : any;
  trailerKey: string = "";


  constructor(
    private route: ActivatedRoute,
    private tmdbService: TmdbService
  ) {}

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);

    this.tmdbService.getMovieDetails(id).subscribe((data) => {
      this.movie = data;

      this.tmdbService.getMovieGenres(id).subscribe((genres) => {
        this.movie.genres = genres;
      });

      this.tmdbService.getMovieCredits(id).subscribe((actors) => {
        this.cast = actors.cast.slice(0, 10);
      });

      this.tmdbService.getMovieVideos(id).subscribe((videoKey) => {
        this.trailerKey = videoKey;
      });
    });
  }


}
