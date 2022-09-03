import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpoSobreComponent } from './corpo-sobre.component';

describe('CorpoSobreComponent', () => {
  let component: CorpoSobreComponent;
  let fixture: ComponentFixture<CorpoSobreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorpoSobreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorpoSobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
