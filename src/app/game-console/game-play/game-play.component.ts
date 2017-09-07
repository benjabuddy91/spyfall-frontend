import { Component, OnInit } from '@angular/core';

import { GameConsoleService } from './../game-console.service';

@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.css']
})
export class GamePlayComponent implements OnInit {

  constructor(private gameConsoleService: GameConsoleService) { }

  ngOnInit() {
  }

}
