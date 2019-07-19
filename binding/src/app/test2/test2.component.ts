import { Component } from '@angular/core';

@Component({
  selector: 'app-test2',
  template: `
    <h2>Welcome {{name}}</h2>
    <input [id]="myId" type="text" value="Vishwas">
    <input id="{{myId}}" type="text" value="Vishwas" disabled>
    <input id="{{myId}}" type="text" value="Vishwas" [disabled]="false">
    <input id="{{myId}}" type="text" value="Vishwas" [disabled]="isDisabled">
    <input id="{{myId}}" type="text" value="Vishwas" bind-disabled="isDisabled">
  `,
  styleUrls: []
})
//Interpolation doest work on boolean values on DOM elements
export class Test2Component {
  
  public name = "Codevolution";
  public myId = "testeId";

  public isDisabled = false;

  constructor() {};

  ngOnInit(){
    
  }
}
