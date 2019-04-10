import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaAdopcionCreateComponent } from './mascota-adopcion-create.component';

describe('MascotaAdopcionCreateComponent', () => {
  let component: MascotaAdopcionCreateComponent;
  let fixture: ComponentFixture<MascotaAdopcionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascotaAdopcionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotaAdopcionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
