import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalRotaComponent } from './local-rota.component';

describe('LocalRotaComponent', () => {
  let component: LocalRotaComponent;
  let fixture: ComponentFixture<LocalRotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalRotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalRotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
