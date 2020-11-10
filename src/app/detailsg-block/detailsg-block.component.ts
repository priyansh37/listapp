import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { BookingService } from '../booking.service';
import { ListPropert } from '../list-propert';
import { PackagePriceMatser } from '../PackagePriceMatser';
import { PropertyInfo } from '../PropertyInfo';
import {Route} from '@angular/router'


@Component({
  selector: 'app-detailsg-block',
  templateUrl: './detailsg-block.component.html',
  styleUrls: ['./detailsg-block.component.css']
})
export class DetailsgBlockComponent implements OnInit {

  @Input() itemPropInfo : PropertyInfo;
  constructor( private list:BookingService) { }

  collection: ListPropert;

  ngOnInit(): void {
    // this.list.getlist().subscribe((result)=>{console.warn(result)
    //   this.collection = result;
    // })
  }
  getHotelDetails(){
  // console.warn(this.list.HotelDetailsPage(this.collection.list.values()));
  }

}
