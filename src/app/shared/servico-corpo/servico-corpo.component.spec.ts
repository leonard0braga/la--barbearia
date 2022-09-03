import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoCorpoComponent } from './servico-corpo.component';

describe('ServicoCorpoComponent', () => {
  let component: ServicoCorpoComponent;
  let fixture: ComponentFixture<ServicoCorpoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicoCorpoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicoCorpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
