import { TestBed, async, inject } from '@angular/core/testing';

import { FacebookGuardGuard } from './facebook-guard.guard';

describe('FacebookGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacebookGuardGuard]
    });
  });

  it('should ...', inject([FacebookGuardGuard], (guard: FacebookGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
