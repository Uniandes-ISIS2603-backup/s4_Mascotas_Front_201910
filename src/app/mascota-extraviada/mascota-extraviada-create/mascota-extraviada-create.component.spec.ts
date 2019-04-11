import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaExtraviadaCreateComponent } from './mascota-extraviada-create.component';

describe('MascotaExtraviadaCreateComponent', () => {
  let component: MascotaExtraviadaCreateComponent;
  let fixture: ComponentFixture<MascotaExtraviadaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascotaExtraviadaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotaExtraviadaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
