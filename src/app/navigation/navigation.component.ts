import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Router } from '@angular/router';

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
        ]
      },
      {
        title: "Libraries",
        route: "libraries",
        icon: "home",
        children: [
          {
            title: "Angular Material",
            route: "angular-material",
            icon: "home",
          },
          {
            title: "Angular Animations",
            route: "angular-animations",
            icon: "home",
          },

        ]
      },
      {
        title: "Misc",
        route: "misc",
        icon: "home",
        children: [
          {
            title: "Sources",
            route: "sources",
            icon: "home"
          }
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

  constructor(private router: Router) {
    this.dataSource = DATA;
  }

  calculateProgress = () => {
    if (this.router.url === "/")
    {
      return 0;
    }
    let listOfRoutes = this.router.config.slice(1);
    let currentRoute = listOfRoutes.findIndex((route) => this.router.url === '/' + route.path)
    if (currentRoute !== -1)
    {
      return (currentRoute + 1) / (listOfRoutes.length === 0? 1 : listOfRoutes.length) * 100;
    }
    return 0;
  }

  hasChild = (_: number, node: Chapter) => !!node.children && node.children.length > 0;
}
