import { LocalStorageService } from 'ngx-webstorage';
import { BbStorageConstants } from './bb-storage-constants';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BbLocalStorageService {

  constructor(
    private localStorageService: LocalStorageService) { }

  public isAuthed(): boolean {
    return !!this.getToken();
  }

  public getToken(): string {
    return this.localStorageService.retrieve(BbStorageConstants.ACCESS_TOKEN);
  }

  public saveToken(token: string) {
    this.localStorageService.store(BbStorageConstants.ACCESS_TOKEN, token);
  }

  public clear() {
    this.localStorageService.clear();
  }
}
