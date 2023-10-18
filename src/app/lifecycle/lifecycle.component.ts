import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent {

clicks = 0;


click () {
  console.log("click");
  this.clicks ++;
}


  



}
