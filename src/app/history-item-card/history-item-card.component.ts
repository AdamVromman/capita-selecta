import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-history-item-card',
  templateUrl: './history-item-card.component.html',
  styleUrls: ['./history-item-card.component.scss']
})
export class HistoryItemCardComponent {

  @Input() startPositionX: Number = 0;
  @Input() startPositionY: Number = 0;

  constructor() {
  }

}
