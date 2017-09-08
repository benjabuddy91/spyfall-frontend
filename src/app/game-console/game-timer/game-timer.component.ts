import { Component, OnInit, OnDestroy } from '@angular/core';

import {TimerObservable} from 'rxjs/observable/TimerObservable';
import { Subscription } from 'rxjs/Subscription';

import { GameConsoleService } from './../game-console.service';

@Component({
  selector: 'app-game-timer',
  templateUrl: './game-timer.component.html',
  styleUrls: ['./game-timer.component.css']
})
export class GameTimerComponent implements OnInit, OnDestroy {
  duration: Number = 10;
  timeStart: Number;
  timeLeft: Number;
  timerSubscription: Subscription;

  constructor(private gameConsoleService: GameConsoleService) { }

  ngOnInit() {
    this.timeStart = this.gameConsoleService.game['startTime'];

    this.timerSubscription = TimerObservable.create(0, 100).subscribe(t => {
      const elapsed = Math.ceil((Date.now() - +this.timeStart) / 1000);
      this.timeLeft = +this.duration - elapsed;
      if (this.timeLeft <= 0) { this.timerSubscription.unsubscribe(); }
    });
  }

  ngOnDestroy() {
    this.timerSubscription.unsubscribe();
  }

}
