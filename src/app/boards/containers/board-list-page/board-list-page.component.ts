import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Board } from '../../models/board';
import { Router } from '@angular/router';
import { BbLocalStorageService } from '../../../core/storage/bb-localstorage-services';
import { BbSessionStorageService } from '../../../core/storage/bb-sessionstorage-services';

@Component({
  selector: 'bb-board-list-page',
  templateUrl: './board-list-page.component.html',
  styleUrls: ['./board-list-page.component.scss']
})
export class BoardListPageComponent implements OnInit {

  boards$: Observable<Board[]>;

  constructor(
    private router: Router,
    private localStorageService: BbLocalStorageService,
    private sessionStorageService: BbSessionStorageService
  ) { }

  ngOnInit() {
  }

  logout() {
    console.log('logout!');
    this.localStorageService.clear();
    this.sessionStorageService.clear();
    this.router.navigate(['/login']);
  }

  getBoards() {
  }
}
