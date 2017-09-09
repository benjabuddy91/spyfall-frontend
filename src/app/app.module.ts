import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GameConsoleComponent } from './game-console/game-console.component';
import { GameInitComponent } from './game-console/game-init/game-init.component';
import { GameNewComponent } from './game-console/game-new/game-new.component';
import { GameJoinComponent } from './game-console/game-join/game-join.component';
import { GameConsoleService } from './game-console/game-console.service';
import { GamePlayComponent } from './game-console/game-play/game-play.component';
import { GameLobbyComponent } from './game-console/game-lobby/game-lobby.component';
import { GameTimerComponent } from './game-console/game-timer/game-timer.component';
import { MinutifyPipe } from './shared/minutify.pipe';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    GameConsoleComponent,
    GameInitComponent,
    GameNewComponent,
    GameJoinComponent,
    GamePlayComponent,
    GameLobbyComponent,
    GameTimerComponent,
    MinutifyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [GameConsoleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
