import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DetailsgBlockComponent } from '../detailsg-block/detailsg-block.component';

@Component({
  selector: 'app-room-select',
  templateUrl: './room-select.component.html',
  styleUrls: ['./room-select.component.css']
})
export class RoomSelectComponent implements OnInit {

  @Input() roomtype:any;
  @Input() @Output() priceDetails:any;

  @Output() childEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    
  }

  getPrice(item){
    this.priceDetails = item;
    this.childEvent.emit(this.priceDetails)
    console.warn(this.priceDetails)
    };
}
