import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecompensaListComponent } from './recompensa-list.component';

describe('RecompensaListComponent', () => {
  let component: RecompensaListComponent;
  let fixture: ComponentFixture<RecompensaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecompensaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecompensaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
