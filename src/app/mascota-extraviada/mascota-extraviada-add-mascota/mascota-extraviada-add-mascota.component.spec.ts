import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaExtraviadaAddMascotaComponent } from './mascota-extraviada-add-mascota.component';

describe('MascotaExtraviadaAddMascotaComponent', () => {
  let component: MascotaExtraviadaAddMascotaComponent;
  let fixture: ComponentFixture<MascotaExtraviadaAddMascotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascotaExtraviadaAddMascotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotaExtraviadaAddMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
