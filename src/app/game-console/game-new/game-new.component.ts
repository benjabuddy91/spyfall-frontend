import { Component, OnInit } from '@angular/core';

import { GameConsoleService } from './../game-console.service';

@Component({
  selector: 'app-game-new',
  templateUrl: './game-new.component.html',
  styleUrls: ['./game-new.component.css']
})
export class GameNewComponent implements OnInit {

  constructor(private gameConsoleService: GameConsoleService) { }

  ngOnInit() {
  }

  createGame() {
     this.gameConsoleService.createGame();
  }

  getGame() {
    this.gameConsoleService.getGame();
  }
}
