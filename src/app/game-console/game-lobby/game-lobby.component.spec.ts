import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameLobbyComponent } from './game-lobby.component';

describe('GameLobbyComponent', () => {
  let component: GameLobbyComponent;
  let fixture: ComponentFixture<GameLobbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameLobbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameLobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
