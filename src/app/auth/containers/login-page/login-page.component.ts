import { Component, OnInit } from '@angular/core';
import { Credentials } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { BbLocalStorageService } from '../../../core/storage/bb-localstorage-services';

@Component({
  selector: 'bb-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  pending$ = false;
  error$ = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private localStorageService: BbLocalStorageService
  ) { }

  ngOnInit() { }

  onSubmit(credentials: Credentials) {
    this.authService.login(credentials).subscribe(
      (user) => {
        this.localStorageService.saveToken(user.name);
        this.router.navigate(['']);
      },
      (error) => console.log(error)
    );
  }

}
