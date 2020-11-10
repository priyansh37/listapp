import { Component, Input, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { ListPropert } from '../list-propert';
import { PropertyInfo } from '../PropertyInfo';

@Component({
  selector: 'app-img-block',
  templateUrl: './img-block.component.html',
  styleUrls: ['./img-block.component.css']
})
export class ImgBlockComponent implements OnInit {

  @Input() itemPropInfo: PropertyInfo;
  constructor(private list:BookingService) { }
  collection: ListPropert;

  ngOnInit(): void {
  }
}
