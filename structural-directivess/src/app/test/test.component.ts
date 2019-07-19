import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-test',
  template: `
    <h2 *ngIf="displayName; else elseBlock">
      Codevolution
    </h2>
    <ng-template #elseBlock>
    <h2>
      Name is hidden
    </h2>
    </ng-template>

  <br>
  
  <div *ngIf="displayName; then thenBlock2; else elseBlock2"></div>
  <ng-template #thenBlock2>
  <h2>
    Codevolution
  </h2>
  </ng-template>
  <ng-template #elseBlock2>
  <h2>
    Name is hidden
  </h2>
  </ng-template>

  <button (click)="change()">Change Display</button>

  <div [ngSwitch]="color">
    <div *ngSwitchCase="'red'">You picked red color</div>
    <div *ngSwitchCase="'blue'">You picked blue color</div>
    <div *ngSwitchCase="'green'">You picked green color</div>
    <div *ngSwitchDefault>Picked again</div>
  </div>
  ---------------------------------------------
  <div *ngFor="let color of colors; index as i">
    <h2>{{i}} - {{color}} </h2>
  </div> 
  ---------------------------------------------
  <div *ngFor="let color of colors; first as f">
    <h2>{{f}} - {{color}} </h2>
  </div> 
  ---------------------------------------------
  <div *ngFor="let color of colors; last as l">
    <h2>{{l}} - {{color}} </h2>
  </div> 
  ---------------------------------------------
  <div *ngFor="let color of colors; odd as o">
    <h2>{{o}} - {{color}} </h2>
  </div> 
  ---------------------------------------------
  <div *ngFor="let color of colors; even as e">
    <h2>{{e}} - {{color}} </h2>
  </div> 

  `,
  styles: []
})
export class TestComponent implements OnInit {

  public displayName = false;

  public color = "orange";

  public colors = ["red", "blue", "green", "yellow"];

  constructor() { }

  ngOnInit() {
  }

  change(){
    this.displayName = !this.displayName;
  }

}
