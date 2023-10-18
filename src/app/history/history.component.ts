import { Component } from '@angular/core';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent {
    date1: Date | null;
    date2: Date | null;
    date3: Date | null;
    date4: Date | null;


    constructor() {
      this.date1 = new Date(2009, 0);
      this.date2 = new Date(2010, 9, 10);
      this.date3 = new Date(2011, 0, 1);
      this.date4 = new Date(2016, 8, 14);
    }

}
