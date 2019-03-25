import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaExtraviadaListComponent } from './mascota-extraviada-list.component';

describe('MascotaExtraviadaListComponent', () => {
  let component: MascotaExtraviadaListComponent;
  let fixture: ComponentFixture<MascotaExtraviadaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascotaExtraviadaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotaExtraviadaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
