import { TestBed } from '@angular/core/testing';

import { MascotaExtraviadaService } from './mascota-extraviada.service';

describe('MascotaExtraviadaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MascotaExtraviadaService = TestBed.get(MascotaExtraviadaService);
    expect(service).toBeTruthy();
  });
});
