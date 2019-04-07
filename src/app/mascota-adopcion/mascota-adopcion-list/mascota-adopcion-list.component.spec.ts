import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaAdopcionListComponent } from './mascota-adopcion-list.component';

describe('MascotaAdopcionListComponent', () => {
  let component: MascotaAdopcionListComponent;
  let fixture: ComponentFixture<MascotaAdopcionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascotaAdopcionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotaAdopcionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
