import { Component, OnInit, Input } from '@angular/core';
import { Board } from '../../models/board';

@Component({
  selector: 'bb-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss']
})
export class BoardListComponent implements OnInit {

  @Input() boards: Board[];

  constructor() { }

  ngOnInit() {
  }

}
