import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaAdopcionDetailComponent } from './mascota-adopcion-detail.component';

describe('MascotaAdopcionDetailComponent', () => {
  let component: MascotaAdopcionDetailComponent;
  let fixture: ComponentFixture<MascotaAdopcionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascotaAdopcionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotaAdopcionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
