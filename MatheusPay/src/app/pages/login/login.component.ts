import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginService = inject(LoginService);
  public router = inject(Router);
  public isLoggingIn = false;

  public id: any = 5;
  public login: any = "";
  public senha: any = "";

  public loginUser() {
    this.isLoggingIn = true;
    this.loginService.login(this.login, this.senha).subscribe(data => {
      data;
      if (this.isLoggingIn == true) {
        this.router.navigate(['dashboard', this.id])
      } else {
        console.log('error login')
      }
    });
  }
}
