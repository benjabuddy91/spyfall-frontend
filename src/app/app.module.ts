import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GameConsoleComponent } from './game-console/game-console.component';
import { GameInitComponent } from './game-console/game-init/game-init.component';
import { GameNewComponent } from './game-console/game-new/game-new.component';
import { GameJoinComponent } from './game-console/game-join/game-join.component';
import { GameConsoleService } from './game-console/game-console.service';
import { GamePlayComponent } from './game-console/game-play/game-play.component';
import { GameLobbyComponent } from './game-console/game-lobby/game-lobby.component';

@NgModule({
  declarations: [
    AppComponent,
    GameConsoleComponent,
    GameInitComponent,
    GameNewComponent,
    GameJoinComponent,
    GamePlayComponent,
    GameLobbyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [GameConsoleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
