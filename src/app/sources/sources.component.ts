import { Component } from '@angular/core';

const sources = [
  {
    title: "trends.google.com",
    source: "https://trends.google.com/trends/explore?date=all&geo=BE&q=%2Fg%2F11c6w0ddw9,%2Fm%2F0j45p7w,%2Fm%2F012l1vxv,%2Fg%2F11c0vmgx5d&hl=en",
    checkedOn: new Date(2023, 9, 15)
  },
  {
    title: "gist.github.com",
    source: "https://gist.github.com/tkrotoff/b1caa4c3a185629299ec234d2314e190",
    checkedOn: new Date(2023, 9, 15)
  },
  {
    title: "brocoders.com",
    source: "https://brocoders.com/blog/angular-vs-react/",
    checkedOn: new Date(2023, 9, 15)
  },
  {
    title: "knowledgehut.com",
    source: "https://www.knowledgehut.com/blog/web-development/angular-version-history",
    checkedOn: new Date(2023, 9, 15)
  },
  {
    title: "angular.io",
    source: "https://angular.io/",
    checkedOn: new Date(2023, 9, 17)
  },
  {
    title: "medium.jonasbandi.net",
    source: "https://medium.jonasbandi.net/angular-vs-react-popularity-ea2659308cd5",
    checkedOn: new Date(2023, 9, 17)
  },
  {
    title: "medium.com",
    source: "https://medium.com/swlh/angular-vs-react-vs-vue-802a7c5f7e50",
    checkedOn: new Date(2023, 9, 16)
  },
  {
    title: "browserstack.com",
    source: "https://www.browserstack.com/guide/angular-vs-react-vs-vue#:~:text=A%20simple%20difference%20between%20these,Vue%20with%2018.97%25%20of%20developers.",
    checkedOn: new Date(2023, 9, 17)
  },
]

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.scss']
})
export class SourcesComponent {
  list = sources;
}
