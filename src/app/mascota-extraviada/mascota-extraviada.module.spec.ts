import { MascotaExtraviadaModule } from './mascota-extraviada.module';

describe('MascotaExtraviadaModule', () => {
  let mascotaExtraviadaModule: MascotaExtraviadaModule;

  beforeEach(() => {
    mascotaExtraviadaModule = new MascotaExtraviadaModule();
  });

  it('should create an instance', () => {
    expect(mascotaExtraviadaModule).toBeTruthy();
  });
});
