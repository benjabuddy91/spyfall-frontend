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
      .fromEvent<any>('message')
  }

  playerJoinedObservable() {
    return this.socket
      .fromEvent<any>('player-joined')
      .map(player => this.game['players'].push(player))
  }

  createGame(player) {
    this.player = player;
    return this.http.post('http://localhost:3000/games', { player: player })
      .map((response: Response) => {
        return this.game = response.json();
      });
  }

  joinGame(player, accessCode) {
    this.player = player;
    this.socket.emit('player-joined', player);
    return this.http.put('http://localhost:3000/games/' + accessCode + '/join', { player: player })
      .map((response) => {
        return this.game = response.json();
      });
  }

  getGame() {
    return this.http.get('http://localhost:3000/games/' + this.game['accessCode'])
      .map((response) => {
        return this.game = response.json();
      });
  }

  startGame() {
    return this.http.put('http://localhost:3000/games/' + this.game['accessCode'] + '/start', {})
      .map((response) => {
        return this.game = response.json();
      });
  }

}
