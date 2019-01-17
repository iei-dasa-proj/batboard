import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardListPageComponent } from './containers/board-list-page/board-list-page.component';

export const routes: Routes = [
  { path: '', component: BoardListPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoardsRoutingModule { }
