import { Component } from '@angular/core';
import { Hero } from './hero';


@Component({
  selector: 'my-app',
  template: `
  <h1>Choose Your Heroes</h1>
  <!-- Insert template from hero.component -->
  <hero></hero>`,
})
export class AppComponent  { 

}


