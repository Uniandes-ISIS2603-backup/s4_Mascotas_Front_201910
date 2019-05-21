import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarBusquedaComponent } from './listar-busqueda.component';

describe('ListarBusquedaComponent', () => {
  let component: ListarBusquedaComponent;
  let fixture: ComponentFixture<ListarBusquedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarBusquedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
