import { Component, OnInit } from '@angular/core';

import { GameConsoleService } from './game-console.service';

@Component({
  selector: 'app-game-console',
  templateUrl: './game-console.component.html',
  styleUrls: ['./game-console.component.css']
})
export class GameConsoleComponent implements OnInit {

  constructor(private gameConsoleService: GameConsoleService) { }

  ngOnInit() {
    this.gameConsoleService.gameStateChanged
      .subscribe(gameState => {
        console.log(gameState);
      });
  }

}
