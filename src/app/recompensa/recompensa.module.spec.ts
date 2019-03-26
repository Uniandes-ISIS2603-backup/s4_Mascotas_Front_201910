import { RecompensaModule } from './recompensa.module';

describe('RecompensaModule', () => {
  let recompensaModule: RecompensaModule;

  beforeEach(() => {
    recompensaModule = new RecompensaModule();
  });

  it('should create an instance', () => {
    expect(recompensaModule).toBeTruthy();
  });
});
