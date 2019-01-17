import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Board } from '../../models/board';
import { Router } from '@angular/router';
import { BbLocalStorageService } from '../../../core/storage/bb-localstorage-services';
import { BbSessionStorageService } from '../../../core/storage/bb-sessionstorage-services';
import { BoardsService } from '../../../core/boards/boards.services';

@Component({
  selector: 'bb-board-list-page',
  templateUrl: './board-list-page.component.html',
  styleUrls: ['./board-list-page.component.scss']
})
export class BoardListPageComponent implements OnInit {

  boards$: Observable<Board[]>;
  result: string;

  constructor(
    private router: Router,
    private localStorageService: BbLocalStorageService,
    private sessionStorageService: BbSessionStorageService,
    private boardsService: BoardsService
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
    console.log('get boards!');
    this.boards$ = this.boardsService.getBoards();
    this.boards$.subscribe(
      (res) => console.log(res)
    );
    // .subscribe(
    //   res => {
    //     console.log(res);
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // );


  }
  createBoard() {
    let board = <Board>{
      name: this.makeBoardNameFake(),
      from_date: new Date(),
      due_date: new Date()
    };
    this.boardsService.createBoard(board);
  }

  makeBoardNameFake() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

}
