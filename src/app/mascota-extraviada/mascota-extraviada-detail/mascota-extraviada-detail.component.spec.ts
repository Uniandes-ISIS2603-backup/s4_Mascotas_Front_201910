import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaExtraviadaDetailComponent } from './mascota-extraviada-detail.component';

describe('MascotaExtraviadaDetailComponent', () => {
  let component: MascotaExtraviadaDetailComponent;
  let fixture: ComponentFixture<MascotaExtraviadaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascotaExtraviadaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotaExtraviadaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
