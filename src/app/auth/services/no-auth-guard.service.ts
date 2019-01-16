import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BbLocalStorageService } from '../../core/storage/bb-localstorage-services';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NoAuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private localStorageService: BbLocalStorageService
  ) { }

  canActivate(): boolean {
    const isAuthed = this.localStorageService.isAuthed();
    if (isAuthed) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
