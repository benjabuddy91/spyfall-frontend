import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameConsoleComponent } from './game-console/game-console.component';
import { GameInitComponent } from './game-console/game-init/game-init.component';

@NgModule({
  declarations: [
    AppComponent,
    GameConsoleComponent,
    GameInitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
