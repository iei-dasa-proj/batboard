import { SessionStorageService } from 'ngx-webstorage';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BbSessionStorageService {

  constructor(
    private sessionStorageService: SessionStorageService) { }

  public clear() {
    this.sessionStorageService.clear();
  }
}
