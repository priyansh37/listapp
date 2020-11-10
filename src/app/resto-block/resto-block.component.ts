import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { BookingService } from '../booking.service';
import { ListPropert } from '../list-propert';
import { PackagePriceMatser } from '../PackagePriceMatser';
import { PropertyInfo } from '../PropertyInfo';


@Component({
  selector: 'app-resto-block',
  templateUrl: './resto-block.component.html',
  styleUrls: ['./resto-block.component.css']
})
export class RestoBlockComponent implements OnInit {

  @Input() item : PropertyInfo;

  constructor() { }
  
  ngOnInit(): void {
  }
}
