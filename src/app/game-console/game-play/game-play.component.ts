import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { GameConsoleService } from './../game-console.service';

@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.css']
})
export class GamePlayComponent implements OnInit {
  game: Object;

  constructor(private gameConsoleService: GameConsoleService) { }

  ngOnInit() {
    this.gameConsoleService.gameStateChanged
      .next('play');
  }

}
