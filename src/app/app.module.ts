import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GameConsoleComponent } from './game-console/game-console.component';
import { GameInitComponent } from './game-console/game-init/game-init.component';
import { GameNewComponent } from './game-console/game-new/game-new.component';
import { GameJoinComponent } from './game-console/game-join/game-join.component';

@NgModule({
  declarations: [
    AppComponent,
    GameConsoleComponent,
    GameInitComponent,
    GameNewComponent,
    GameJoinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
