import { TestBed } from '@angular/core/testing';

import { AbonementService } from './abonement.service';

describe('AbonementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbonementService = TestBed.get(AbonementService);
    expect(service).toBeTruthy();
  });
});
