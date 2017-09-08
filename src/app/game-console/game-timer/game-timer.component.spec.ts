import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTimerComponent } from './game-timer.component';

describe('GameTimerComponent', () => {
  let component: GameTimerComponent;
  let fixture: ComponentFixture<GameTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
