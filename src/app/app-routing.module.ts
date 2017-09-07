import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { GameConsoleComponent } from './game-console/game-console.component';
import { GameInitComponent } from './game-console/game-init/game-init.component';
import { GameNewComponent } from './game-console/game-new/game-new.component';
import { GameJoinComponent } from './game-console/game-join/game-join.component';
import { GameLobbyComponent } from './game-console/game-lobby/game-lobby.component';

const appRoutes: Routes = [
  { path: '', component: GameConsoleComponent, children: [
    { path: '', component: GameInitComponent },
    { path: 'new', component: GameNewComponent },
    { path: 'join', component: GameJoinComponent },
    { path: ':accessCode', component: GameLobbyComponent }
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
