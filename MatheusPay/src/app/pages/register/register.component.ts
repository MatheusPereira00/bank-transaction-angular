import { UserRegister } from './../../types/userRegister';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public userRegister!: UserRegister;
  public form: FormGroup = new FormGroup({});

  private userService = inject(UserService);
  private router = inject(Router);

  public ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(''),
      nome: new FormControl('', Validators.compose([Validators.required])),
      login: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      senha: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required)
    });
  }

  public registerUser(): void {
    if (this.form.valid) {
      const newUser = this.form.getRawValue();
      this.userService.registerUser(newUser);
    }
  }
}
    