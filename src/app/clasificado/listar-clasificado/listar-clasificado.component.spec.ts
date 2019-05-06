import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarClasificadoComponent } from './listar-clasificado.component';

describe('ListarClasificadoComponent', () => {
  let component: ListarClasificadoComponent;
  let fixture: ComponentFixture<ListarClasificadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarClasificadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarClasificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
