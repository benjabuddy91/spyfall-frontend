import { TestBed, inject } from '@angular/core/testing';

import { GameConsoleService } from './game-console.service';

describe('GameConsoleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameConsoleService]
    });
  });

  it('should be created', inject([GameConsoleService], (service: GameConsoleService) => {
    expect(service).toBeTruthy();
  }));
});
