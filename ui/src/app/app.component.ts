import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private tokenService: TokenStorageService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loggedIn = this.tokenService.getLoggedIn()
  }

  loggedIn!: Observable<boolean>

  signout() {
    this.tokenService.signOut()
    this.router.navigate(['/login']).then(() => window.location.reload())
  }
}
