import { Injectable } from '@angular/core';
import { EventEmitter } from 'protractor';
import { BehaviorSubject, Observable } from 'rxjs';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }

  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  signOut(): void {
    window.sessionStorage.clear();
    this.loggedIn.next(false)
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
    this.loggedIn.next(!!token)
  }

  public getToken(): string | null {
    const token = window.sessionStorage.getItem(TOKEN_KEY);
    this.loggedIn.next(!!token)
    return token
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getLoggedIn(): Observable<boolean> {
    return this.loggedIn
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
}
