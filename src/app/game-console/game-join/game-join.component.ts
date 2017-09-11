import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { GameConsoleService } from './../game-console.service';

@Component({
  selector: 'app-game-join',
  templateUrl: './game-join.component.html',
  styleUrls: ['./game-join.component.css']
})
export class GameJoinComponent implements OnInit {
  gameForm: FormGroup = new FormGroup({
    'accessCode': new FormControl(),
    'player': new FormControl()
  });

  constructor(private router: Router,
              private route: ActivatedRoute,
              private gameConsoleService: GameConsoleService) { }

  ngOnInit() {
    this.gameConsoleService.gameStateChanged
      .next('join');
  }

  joinGame() {
    this.gameConsoleService.joinGame(this.gameForm.value.player, this.gameForm.value.accessCode)
      .subscribe(() => {
        this.router.navigate(['../', this.gameConsoleService.game['accessCode']], { relativeTo: this.route });
      });
  }

}
