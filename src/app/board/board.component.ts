import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BbLocalStorageService } from '../core/storage/bb-localstorage-services';
import { BbSessionStorageService } from '../core/storage/bb-sessionstorage-services';

@Component({
  selector: 'bb-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

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
    this.api.getBooks()
      .subscribe(res => {
        console.log(res);
        this.books = res;
      }, err => {
        console.log(err);
      });
  }

}
