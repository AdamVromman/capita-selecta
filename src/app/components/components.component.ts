import { Component } from '@angular/core';

const componentParts = [
  {
    name: "CSS selector",
    function: "To be able to call the component",
    otherFile: false,
    optional: false,
  },
  {
    name: "HTML template",
    function: "The part that will be rendered by Angular",
    otherFile: true,
    optional: false,
  },
  {
    name: "TS part",
    function: "The part that provides the logic and the properties",
    otherFile: false,
    optional: false,
  },
  {
    name: "CSS file",
    function: "To apply scoped styling to the component",
    otherFile: true,
    optional: true,
  },
  {
    name: "TS testing file",
    function: "To test the component",
    otherFile: true,
    optional: true,
  }
];

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})

export class ComponentsComponent {
  displayedColumns: string[] = ['component', 'function', 'otherFile', 'optional'];
  dataSource = componentParts;
}
