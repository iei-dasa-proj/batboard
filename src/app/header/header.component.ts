import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BbLocalStorageService } from '../core/storage/bb-localstorage-services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent {

  constructor(
    private router: Router,
    private localStorageService: BbLocalStorageService
    ) {
      console.log(this.localStorageService.getToken());
    }

  getCurrentUrl() {
    return this.router.url;
  }

  getLocalStorage() {
    return this.localStorageService.getToken();
  }

  login() {
    this.router.navigate(['/login']);
  }
}
