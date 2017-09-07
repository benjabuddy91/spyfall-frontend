import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';

@Injectable()
export class GameConsoleService {
  gameChanged = new Subject();
  game = {};

  constructor(private http: Http) { }

  createGame() {
    return this.http.post('http://localhost:3000/games', { player: 'Benja' })
      .map((response: Response) => {
        this.game = response.json();
        return this.game;
      });
  }

  getGame(accessCode) {
    this.http.get('http://localhost:3000/games/' + accessCode)
      .map((response) => {
        return response.json()[0];
      })
      .subscribe(data => {
        this.game = data;
        this.gameChanged.next(this.game);
      });
  }
}
