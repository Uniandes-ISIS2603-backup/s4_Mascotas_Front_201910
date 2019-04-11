import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaExtraviadaEditComponent } from './mascota-extraviada-edit.component';

describe('MascotaExtraviadaEditComponent', () => {
  let component: MascotaExtraviadaEditComponent;
  let fixture: ComponentFixture<MascotaExtraviadaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascotaExtraviadaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotaExtraviadaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
