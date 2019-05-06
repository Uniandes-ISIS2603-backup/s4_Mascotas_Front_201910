import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificadoDetailComponent } from './clasificado-detail.component';

describe('ClasificadoDetailComponent', () => {
  let component: ClasificadoDetailComponent;
  let fixture: ComponentFixture<ClasificadoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasificadoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasificadoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
