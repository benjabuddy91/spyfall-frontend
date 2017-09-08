import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { GameConsoleService } from './../game-console.service';

@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.css']
})
export class GamePlayComponent implements OnInit {
  game: Object = {};
  player: String = '';

  constructor(private router: Router,
              private route: ActivatedRoute,
              private gameConsoleService: GameConsoleService) {
    this.game = this.gameConsoleService.game;
    this.player = this.gameConsoleService.player;
  }

  ngOnInit() {
    if (!this.game || !this.player) {
      this.router.navigate(['/']);
    }

    this.gameConsoleService.gameStateChanged
      .next('play');
  }

}
