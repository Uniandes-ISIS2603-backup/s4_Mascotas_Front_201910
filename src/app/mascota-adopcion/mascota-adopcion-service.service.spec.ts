import { TestBed } from '@angular/core/testing';

import { MascotaAdopcionService } from './mascota-adopcion-service.service';

describe('MascotaAdopcionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MascotaAdopcionService = TestBed.get(MascotaAdopcionService);
    expect(service).toBeTruthy();
  });
});
