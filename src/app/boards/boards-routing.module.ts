import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardListComponent } from './components/board-list/board-list.component';

export const routes: Routes = [
  { path: '', component: BoardListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoardsRoutingModule { }
