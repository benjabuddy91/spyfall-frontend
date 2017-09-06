import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { GameConsoleComponent } from './game-console/game-console.component';
import { GameInitComponent } from './game-console/game-init/game-init.component';
import { GameNewComponent } from './game-console/game-new/game-new.component';

const appRoutes: Routes = [
  { path: '', component: GameConsoleComponent, children: [
    { path: '', component: GameInitComponent },
    { path: 'new', component: GameNewComponent }
  ] }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
