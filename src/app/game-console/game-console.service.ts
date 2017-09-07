import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class GameConsoleService {
  game = {};

  constructor(private http: Http) { }

  createGame() {
    this.http.post('http://localhost:3000/games', { player: 'Benja' })
      .subscribe(data => this.game = data );
  }

  getGame() {
    return this.game;
  }
}
