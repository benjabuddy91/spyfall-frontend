import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {TimerObservable} from 'rxjs/observable/TimerObservable';
import { Subscription } from 'rxjs/Subscription';

import { GameConsoleService } from './../game-console.service';

@Component({
  selector: 'app-game-lobby',
  templateUrl: './game-lobby.component.html',
  styleUrls: ['./game-lobby.component.css']
})
export class GameLobbyComponent implements OnInit, OnDestroy {
  game: Object = {};
  player: String = '';
  gameSubscription: Subscription;
  playerJoinedSubscription: Subscription;
  gameStartedSubscription: Subscription;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private gameConsoleService: GameConsoleService) {
    this.game = this.gameConsoleService.game;
    this.player = this.gameConsoleService.player;
  }

  ngOnInit() {
    if (!this.game || !this.player) { this.router.navigate(['/']); }

    this.playerJoinedSubscription = this.gameConsoleService.playerJoinedObservable()
      .subscribe(player => {
        this.game = this.gameConsoleService.game;
      });

    this.gameStartedSubscription = this.gameConsoleService.gameStartedObservable()
      .subscribe(started => {
        this.gameConsoleService.getGame()
          .subscribe(game => {
            this.router.navigate(['play'], { relativeTo: this.route });
          });
      });

    this.gameConsoleService.gameStateChanged
      .next('lobby');
  }

  ngOnDestroy() {
    this.playerJoinedSubscription.unsubscribe();
    this.gameStartedSubscription.unsubscribe();
  }

  startGame() {
    this.gameConsoleService.startGame()
      .subscribe(game => {
        console.log(game);
        this.router.navigate(['../', this.game['accessCode'], 'play'],  { relativeTo: this.route });
      });
  }

}
