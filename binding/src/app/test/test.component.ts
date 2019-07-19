import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>Welcome {{name}}</h2>
    <h2>{{2+2}}</h2>
    <h2>{{"Welcome " + name}}</h2>
    <h2>{{name.length}}</h2>
    <h2>{{name.toUpperCase()}}</h2>
    <h2>{{greetUser()}}</h2>
    <h2>{{siteUrl}}</h2>
      
  `,
  styleUrls: []
})
export class TestComponent {
  
  public name = "Codevolution";
  public siteUrl = window.location.href;

  constructor() {};

  ngOnInit(){
    
  }

  greetUser() {
    return "Hello " + this.name;
  }
}
