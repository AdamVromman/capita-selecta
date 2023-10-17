import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitaSelectaComponent } from './capita-selecta.component';

describe('CapitaSelectaComponent', () => {
  let component: CapitaSelectaComponent;
  let fixture: ComponentFixture<CapitaSelectaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CapitaSelectaComponent]
    });
    fixture = TestBed.createComponent(CapitaSelectaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
