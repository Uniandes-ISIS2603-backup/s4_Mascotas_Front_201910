import { BuscarModule } from './buscar.module';

describe('BuscarModule', () => {
  let buscarModule: BuscarModule;

  beforeEach(() => {
    buscarModule = new BuscarModule();
  });

  it('should create an instance', () => {
    expect(buscarModule).toBeTruthy();
  });
});
