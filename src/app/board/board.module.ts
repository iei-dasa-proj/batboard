import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material';
import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    BoardRoutingModule
  ],
  declarations: [
    BoardComponent
  ],
})
export class BoardModule { }
