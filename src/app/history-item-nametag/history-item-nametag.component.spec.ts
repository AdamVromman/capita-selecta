import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryItemNametagComponent } from './history-item-nametag.component';

describe('HistoryItemNametagComponent', () => {
  let component: HistoryItemNametagComponent;
  let fixture: ComponentFixture<HistoryItemNametagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryItemNametagComponent]
    });
    fixture = TestBed.createComponent(HistoryItemNametagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
