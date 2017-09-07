import { Component, OnInit } from '@angular/core';

import { GameConsoleService } from './../game-console.service';

@Component({
  selector: 'app-game-init',
  templateUrl: './game-init.component.html',
  styleUrls: ['./game-init.component.css']
})
export class GameInitComponent implements OnInit {

  constructor(private gameConsoleService: GameConsoleService) { }

  ngOnInit() {
    this.gameConsoleService.gameStateChanged
      .next('init');
  }

}
