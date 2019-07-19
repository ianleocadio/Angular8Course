import { Component } from '@angular/core';

@Component({
  selector: 'app-test3',
  template: `
    <h2>Welcome {{name}}</h2>
    <h2 class="text-success">Codevolution</h2>
    <h2 [class]="successClass">Codevolution</h2>
    <!-- Does not work -->
    <h2 class="text-special" [class]="successClass">Codevolution</h2>
    <h2 [class.text-danger]="hasError">Codevolution</h2>

    <!-- Multiple css classes on same element by clause -->
    <h2 [ngClass]="messageClasses">Codevolution</h2>

    <!-- Style Binging -->
    <h2 [style.color]=" hasError ? 'red': 'green' ">Style Binding</h2>
    <h2 [style.color]=" highlightColor ">Style Binding 2</h2>
    <h2 [ngStyle]="titleStyles">Style Binding 3</h2>
  `,
  styles: [`
    .text-success {
      color: green;
    }
    .text-danger {
      color: red;
    }
    .text-special {
      font-style: italic;
    }
  `]
})
//Interpolation doest work on boolean values on DOM elements
export class Test3Component {
  
  public name = "Codevolution";
  public successClass = "text-success"
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  public highlightColor = "orange";
  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  };

  constructor() {};

  ngOnInit(){
    
  }
}
