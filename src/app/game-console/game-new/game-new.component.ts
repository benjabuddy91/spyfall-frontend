import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { GameConsoleService } from './../game-console.service';

@Component({
  selector: 'app-game-new',
  templateUrl: './game-new.component.html',
  styleUrls: ['./game-new.component.css']
})
export class GameNewComponent implements OnInit {
  player: String;
  gameForm: FormGroup = new FormGroup({
    'player': new FormControl()
  });

  constructor(private router: Router,
              private route: ActivatedRoute,
              private gameConsoleService: GameConsoleService) { }

  ngOnInit() {
    this.gameConsoleService.gameStateChanged
      .next('new');
  }

  createGame() {
    this.gameConsoleService.createGame(this.gameForm.value.player)
      .subscribe(() => {
        this.router.navigate(['../', this.gameConsoleService.game['accessCode']], {relativeTo: this.route});
      });
  }
}
