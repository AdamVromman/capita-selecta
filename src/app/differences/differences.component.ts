import { Component } from '@angular/core';

const angular1List: String[] = [
  "scopes/controllers",
  "not as modular",
  "not asynchronous",
  "not on Typescript",
  "not able to run on servers",
  "ng-class"
]
const angular2List: String[] = [
  "components",
  "modular",
  "asynchronous",
  "Typescript recommended",
  "able to run on servers",
  "[] & ()"
]

@Component({
  selector: 'app-differences',
  templateUrl: './differences.component.html',
  styleUrls: ['./differences.component.scss']
})
export class DifferencesComponent {

  isChecked = false;
  angular1List = angular1List;
  angular2List = angular2List;
}
