import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';
import { Socket } from 'ng-socket-io';

@Injectable()
export class GameConsoleService {
  gameChanged = new Subject();
  gameStateChanged = new Subject();
  game: Object = {};
  player: String = '';

  constructor(private http: Http,
              private socket: Socket) { }

  clearGameAndPlayer() {
    this.game = {};
    this.player = '';
  }

  sendMessage(msg: string) {
    this.socket.emit('message', msg);
  }

  getMessage() {
    return this.socket
      .fromEvent<any>('message');
  }

  playerJoinedObservable() {
    return this.socket
      .fromEvent<any>('player-joined')
      .map(player => {
        console.log(player);
        if (this.player !== player) { this.game['players'].push(player); }
      });
  }

  gameStartedObservable() {
    return this.socket
      .fromEvent<any>('game-started');
  }

  createGame(player) {
    this.player = player;
    return this.http.post('https://spyfall-api.herokuapp.com/games', { player: player })
      .map((response: Response) => {
        this.game = response.json();
        this.socket.emit('create-game', this.game['accessCode']);
      });
  }

  joinGame(player, accessCode) {
    this.player = player;
    return this.http.put('https://spyfall-api.herokuapp.com/games/' + accessCode + '/join', { player: player })
      .map((response) => {
        this.game = response.json();
        this.socket.emit('join-game',
        {
          gameAccessCode: this.game['accessCode'],
          player: this.player
        });
      })
      .catch((err) => {
        return Observable.throw(err);
      });
  }

  getGame() {
    return this.http.get('https://spyfall-api.herokuapp.com/games/' + this.game['accessCode'])
      .map((response) => {
        return this.game = response.json();
      });
  }

  startGame() {
    return this.http.put('https://spyfall-api.herokuapp.com/games/' + this.game['accessCode'] + '/start', {})
      .map((response) => {
        this.game = response.json();
        this.socket.emit('game-started', this.game['accessCode']);
      });
  }

}
