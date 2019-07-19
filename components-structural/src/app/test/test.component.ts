import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

/*   @Input() 
  public parentData; */

  @Input('parentData') 
  public name;

  @Output()
  public childEvent = new EventEmitter();

  public name2 = "Codevolution";
  public message = "Welcome to Codevolution";
  public person = {
    "firstName" : "John",
    "lastName" : "Doe"
  };

  public date = new Date();


  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
    this.childEvent.emit('Hey codevolution');
  }

}
