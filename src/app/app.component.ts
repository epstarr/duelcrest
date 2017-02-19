import { Component } from '@angular/core';
import { Hero } from './hero';


@Component({
  selector: 'my-app',
  template: `
  <h1>Choose Your Heroes</h1>
  <hero></hero>
  <h3>Full selectedHero JSON Data</h3>
  <p>{{selectedHero | json}}</p>`,
})
export class AppComponent  { 
	hero: Hero;

constructor() {

	}
}


