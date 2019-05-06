import { ClasificadoModule } from './clasificado.module';

describe('ClasificadoModule', () => {
  let clasificadoModule: ClasificadoModule;

  beforeEach(() => {
    clasificadoModule = new ClasificadoModule();
  });

  it('should create an instance', () => {
    expect(clasificadoModule).toBeTruthy();
  });
});
