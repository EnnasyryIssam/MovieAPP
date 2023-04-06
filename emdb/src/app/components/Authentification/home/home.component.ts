import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from "../../../auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {

  constructor(   
     public afAuth: AuthService

  ) { }


  ngOnInit() {
    // Check if user is signed in
    this.afAuth.check()

  }
}
