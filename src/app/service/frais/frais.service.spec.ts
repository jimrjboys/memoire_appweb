import { TestBed } from '@angular/core/testing';

import { FraisService } from './frais.service';

describe('FraisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FraisService = TestBed.get(FraisService);
    expect(service).toBeTruthy();
  });
});
