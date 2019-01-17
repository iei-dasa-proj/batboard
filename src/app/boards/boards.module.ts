import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material';
import { BoardsRoutingModule } from './boards-routing.module';
import { BoardListComponent } from './components/board-list/board-list.component';
import { BoardListPageComponent } from './containers/board-list-page/board-list-page.component';
import { BoardsService } from '../core/boards/boards.services';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    BoardsRoutingModule
  ],
  declarations: [
    BoardListComponent,
    BoardListPageComponent
  ],
  providers: [
    BoardsService
  ]
})
export class BoardsModule { }
