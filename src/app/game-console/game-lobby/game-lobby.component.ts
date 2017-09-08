import { GameConsoleService } from './../game-console.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-game-lobby',
  templateUrl: './game-lobby.component.html',
  styleUrls: ['./game-lobby.component.css']
})
export class GameLobbyComponent implements OnInit {
  game: Object;
  player: String;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private gameConsoleService: GameConsoleService) {}

  ngOnInit() {
    this.game = this.gameConsoleService.game;
    this.player = this.gameConsoleService.player;

    this.gameConsoleService.gameStateChanged
      .next('lobby');
  }

  startGame() {
    this.gameConsoleService.startGame()
      .subscribe(game => {
        this.router.navigate(['../', game['accessCode'], 'play'],  { relativeTo: this.route });
      });
  }

}
