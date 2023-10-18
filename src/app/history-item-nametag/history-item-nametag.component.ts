import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-history-item-nametag',
  templateUrl: './history-item-nametag.component.html',
  styleUrls: ['./history-item-nametag.component.scss']
})
export class HistoryItemNametagComponent {
  @Input() title: String = "";
  @Input() subTitle: String = "";
  @Input() url: String = "";
}
