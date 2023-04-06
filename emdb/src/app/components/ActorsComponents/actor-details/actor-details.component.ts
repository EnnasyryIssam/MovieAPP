import { Component, OnInit } from '@angular/core';
import { TmdbService } from 'src/app/tmdb.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.css'],
})
export class ActorDetailsComponent implements OnInit {
  actors: any[] = [];
  actorCredits: any[] = [];
  creditDetails: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private tmdbService: TmdbService
  ) {}

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);

    // Appel à la méthode getActorDetails pour récupérer les détails de l'acteur
    this.tmdbService.getActorDetails(id).subscribe((data) => {
      this.actors = [data];
    });

    // Appel à la méthode getActorCredits pour récupérer la liste des crédits de l'acteur
    this.tmdbService.getActorCredits(id).subscribe((data) => {
      this.actorCredits = data.cast.slice(0, 5);

      // Boucle sur la liste des crédits pour récupérer les détails de chaque crédit
      this.actorCredits.forEach((credit) => {
        const type = credit.media_type === 'movie' ? 'movie' : 'tv';
        this.tmdbService.getCreditDetails(type, credit.id).subscribe((data) => {
          credit.details = data;
          this.creditDetails.push(credit);
        });
      });
    });
  }
}

//
