import { Component } from '@angular/core';

@Component({
  selector: 'app-test4',
  template: `
    <h2>Welcome {{name}}</h2> 
    <button (click)="onClick($event)">Greet</button><br>  
    <button (click)="greeting2='Welcome Vishwas'">Greet</button><br>  
    {{greeting}}
    {{greeting2}}<br>

    <input #myInput type="text">
    <button (click)="logMessage(myInput)">Log</button><br>

    <!-- Need to import : import { FormsModule } from '@angular/forms'; on app.module.ts and add FormsModule on imports -->
    <input [(ngModel)]="name2" type="text">
    {{name2}}
  `,
  styleUrls: []
})
//Interpolation doest work on boolean values on DOM elements
export class Test4Component {
  
  public name = "Codevolution";
  public greeting = "";
  public name2 = ""

  constructor() {};

  ngOnInit(){
    
  }

  onClick(event){
    alert(event);
    this.greeting = event.type;
  };

  logMessage(input){
    alert(input.value);
  }
}
