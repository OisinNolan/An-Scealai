import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
    if(this.auth.isLoggedIn()) {
      if(this.auth.getUserDetails().role === 'STUDENT') {
        this.router.navigateByUrl('/contents');
      }
      if(this.auth.getUserDetails().role === 'TEACHER') {
        this.router.navigateByUrl('/teacher');
      }
    }
  }

}
