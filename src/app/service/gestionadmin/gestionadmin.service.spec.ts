import { TestBed } from '@angular/core/testing';

import { GestionadminService } from './gestionadmin.service';

describe('GestionadminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GestionadminService = TestBed.get(GestionadminService);
    expect(service).toBeTruthy();
  });
});
