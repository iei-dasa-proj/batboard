import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/error/not-found.component';
import { AuthGuard } from './auth/services/auth-guard.service';
import { AuthRoutingModule } from './auth/auth-routing.module';

export const routes: Routes = [
  { path: '', redirectTo: '/boards', pathMatch: 'full' },
  {
    path: 'boards',
    loadChildren: './boards/boards.module#BoardsModule',
    canActivate: [AuthGuard],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
