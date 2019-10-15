import { TestBed } from '@angular/core/testing';

import { EmplacementService } from './emplacement.service';

describe('EmplacementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmplacementService = TestBed.get(EmplacementService);
    expect(service).toBeTruthy();
  });
});
