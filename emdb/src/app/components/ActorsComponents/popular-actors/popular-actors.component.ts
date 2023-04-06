import { Component, OnInit } from '@angular/core';
import { TmdbService } from 'src/app/tmdb.service';

@Component({
  selector: 'app-popular-actors',
  templateUrl: './popular-actors.component.html',
  styleUrls: ['./popular-actors.component.css'],
})
export class PopularActorsComponent implements OnInit {
  actors: any[] = [];

  constructor(private tmdbService: TmdbService) {}

  ngOnInit(): void {
    this.tmdbService.getPopularActors().subscribe((data) => {
      this.actors = data.results;
    });
  }
}
