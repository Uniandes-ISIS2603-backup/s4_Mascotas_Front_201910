import { MascotaAdopcionModule } from './mascota-adopcion.module';

describe('MascotaAdopcionModule', () => {
  let mascotaAdopcionModule: MascotaAdopcionModule;

  beforeEach(() => {
    mascotaAdopcionModule = new MascotaAdopcionModule();
  });

  it('should create an instance', () => {
    expect(mascotaAdopcionModule).toBeTruthy();
  });
});
