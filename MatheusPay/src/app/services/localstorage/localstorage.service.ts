import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  setLogin(login: string) {
    localStorage.setItem('login', login);
  }

  getLogin(): string | null {
    return localStorage.getItem('login');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  removeToken() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }
}
