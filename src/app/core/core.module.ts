import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NotFoundComponent } from './error/not-found.component';
import { MaterialModule } from '../material';
import { BbLocalStorageService } from './storage/bb-localstorage-services';
import { BbSessionStorageService } from './storage/bb-sessionstorage-services';
import { Ng2Webstorage } from 'ngx-webstorage';

export const COMPONENTS = [
  NotFoundComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    Ng2Webstorage.forRoot({ prefix: 'bb', separator: '-' }),
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  providers: [
    BbLocalStorageService,
    BbSessionStorageService
  ]
})
export class CoreModule { }
