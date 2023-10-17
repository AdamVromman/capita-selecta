import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferencesComponent } from './differences.component';

describe('DifferencesComponent', () => {
  let component: DifferencesComponent;
  let fixture: ComponentFixture<DifferencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DifferencesComponent]
    });
    fixture = TestBed.createComponent(DifferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
