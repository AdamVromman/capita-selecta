import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';

interface Chapter {
  title: string,
  route: string,
  icon: string,
  children?: Chapter[]
}

const DATA: Chapter[] = [
  {
    title: "Capita Selecta",
    route: "",
    icon: "home",
    children: [
      {
        title: "Introduction",
        route: "introduction",
        icon: "home",
        children: [
          {
            title: "History",
            route: "history",
            icon: "home",
          },
          {
            title: "Differences with Angular 1.x",
            route: "differences",
            icon: "home",
          },
          {
            title: "Popularity over time",
            route: "popularity",
            icon: "home",
          }
        ]
      },
      {
        title: "Overview",
        route: "overview",
        icon: "home",
        children: [
          {
            title: "Components",
            route: "components",
            icon: "home",
          },
          {
            title: "Lifecycle",
            route: "lifecycle",
            icon: "home",
          },
          {
            title: "Directives",
            route: "directives",
            icon: "home",
          },
          {
            title: "Dependency injection",
            route: "dependency-injection",
            icon: "home",
          }
        ]
      },
      {
        title: "Libraries",
        route: "libraries",
        icon: "home",
        children: [
          {
            title: "Angular Material",
            route: "angular-materials",
            icon: "home",
          },
          {
            title: "Angular Animations",
            route: "angular-animations",
            icon: "home",
          },

        ]
      }
    ]
  }
]


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  dataSource: Chapter[];

  constructor() {
    this.dataSource = DATA;
  }

  hasChild = (_: number, node: Chapter) => !!node.children && node.children.length > 0;
}
