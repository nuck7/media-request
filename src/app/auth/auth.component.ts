import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login()
  }

  logout() {
    this.authService.logout()
  }
}
