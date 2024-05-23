import { LocalstorageService } from './../localstorage/localstorage.service';
import { TokenResponse } from './../../types/tokenResponse';
import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private http = inject(HttpClient);
  private localstorage = inject(LocalstorageService);
  private router = inject(Router);

  public httpOptions = {
    headers: new HttpHeaders(),
    responseType: 'text' as 'json',
  };

  public login(id: number, login: string, senha: string): Observable<TokenResponse> {
    const body = { id, login, senha };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<TokenResponse>(`${environment.apiSecurity}`, body, { headers })
      .pipe(
        tap(responseToken => {

          const tokenResponse = responseToken.token;
          this.localstorage.setToken(tokenResponse);
          localStorage.setItem('token', tokenResponse);

          const login = responseToken.login;
          this.localstorage.setLogin(login);
          localStorage.setItem('login', login);
        })
      )
  }

  public signout() {
    localStorage.removeItem('token');
    localStorage.removeItem('login');
    this.router.navigate(['']);
  }

}
