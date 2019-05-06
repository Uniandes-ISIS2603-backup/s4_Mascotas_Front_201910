import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearClasificadoComponent } from './crear-clasificado.component';

describe('CrearClasificadoComponent', () => {
  let component: CrearClasificadoComponent;
  let fixture: ComponentFixture<CrearClasificadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearClasificadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearClasificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
