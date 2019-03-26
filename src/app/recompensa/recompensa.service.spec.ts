import { TestBed } from '@angular/core/testing';

import { RecompensaService } from './recompensa.service';

describe('RecompensaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecompensaService = TestBed.get(RecompensaService);
    expect(service).toBeTruthy();
  });
});
