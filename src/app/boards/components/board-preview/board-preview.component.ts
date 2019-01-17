import { Component, OnInit, Input } from '@angular/core';
import { Board } from '../../models/board';

@Component({
  selector: 'bb-board-preview',
  templateUrl: './board-preview.component.html',
  styleUrls: ['./board-preview.component.scss']
})
export class BoardPreviewComponent implements OnInit {

  @Input() board: Board;

  constructor() { }

  ngOnInit() {
  }

  get id() {
    return this.board._id;
  }

  get name() {
    return this.board.name;
  }

  get fromDate() {
    return this.board.from_date;
  }

  get dueDate() {
    return this.board.due_date;
  }
}
