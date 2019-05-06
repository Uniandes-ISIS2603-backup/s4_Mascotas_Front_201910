import { TestBed } from '@angular/core/testing';

import { ClasificadoService } from './clasificado.service';

describe('ClasificadoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClasificadoService = TestBed.get(ClasificadoService);
    expect(service).toBeTruthy();
  });
});
