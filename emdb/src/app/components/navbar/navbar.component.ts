import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TmdbService } from 'src/app/tmdb.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchTerm: string = '';
  searchResults: any[] = [];
  showLogout = false;


  constructor(private route: ActivatedRoute, private tmdbService: TmdbService, private router: Router) {}

  ngOnInit(): void {

  }
  onSearch() {
    this.tmdbService.searchAll(this.searchTerm).subscribe((results: any) => {
      this.searchResults = results.slice(0, 5);
    });
  }
  onResultClick(){
    this.searchResults = [];
    this.searchTerm = '';
  }

  logout() {
    this.router.navigate(['/login']);
  }
  toggleLogout() {
    this.showLogout = !this.showLogout;
  }



}



