import { NavInterface } from './core/models/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public nav: NavInterface[] = [
    {
      name:"Home",
      link:"/"
    },
    {
      name:"Characters",
      link:"/characters"
    },
    {
      name:"Locations",
      link:"/location"
    },
    {
      name:"Episodes",
      link:"/episodies"
    },
    {
      name:"About",
      link:"/about"
    },
  ]
}
