import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'mov-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {

  @Input() rating:number;
  @Output() noimg: EventEmitter = new EventEmitter();
  buttonCLicked=false;
  constructor() { }

  ngOnInit() {
  }
  onImage(){
    this.buttonCLicked = !this.buttonCLicked;
   
  }

  toggleImage(){

  }
}
