import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Subject, take } from 'rxjs';
import { UserRegister } from 'src/app/types/userRegister';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);

  private userSubject = new Subject<UserRegister>();
  public userSubject$ = this.userSubject.asObservable();

  public registerUser(user: UserRegister) {
    return this.http
      .post<UserRegister>(`${environment.userRegister}`, user)
      .pipe(take(1))
      .subscribe((user) => {
        this.userSubject.next(user);
      });
  }
}
