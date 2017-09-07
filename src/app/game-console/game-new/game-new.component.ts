import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GameConsoleService } from './../game-console.service';

@Component({
  selector: 'app-game-new',
  templateUrl: './game-new.component.html',
  styleUrls: ['./game-new.component.css']
})
export class GameNewComponent implements OnInit {
  player: String;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private gameConsoleService: GameConsoleService) { }

  ngOnInit() {
  }

  createGame() {
    this.gameConsoleService.createGame(this.player)
      .subscribe((game: Object) => {
        this.router.navigate(['../', game['accessCode']], {relativeTo: this.route});
      });
  }
}
