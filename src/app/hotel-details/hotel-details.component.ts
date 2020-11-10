import { Component, Input, OnInit, Output } from '@angular/core';
import { from } from 'rxjs';
import { BookingService } from '../booking.service';
import { ListPropert } from '../list-propert';
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {

  details :any;
  sidebarDetails:any;
  selectedItem:any;

  constructor(private router:ActivatedRoute ,private list:BookingService) { }

  collection : ListPropert;
  ngOnInit(): void {

    this.list.HotelDetailsPage(this.router.snapshot.params.PropertyGUID)
      .subscribe(arg => {
        console.warn(arg)
        this.details=arg
        this.sidebarDetails = this.selectedItem;
      });
    }

}























    
    // this.list.getlist().subscribe((result)=>{console.warn(result)
    //   this.collection = result;
    //   this.itemPropInfo = this.collection.list
    // })
    //console.warn(this.router.snapshot.params.PropertyGUID);
    // Rdata($event){
    //   debugger
    //   this.sidebarDetails=$event;
    //   console.warn(this.sidebarDetails)
    // }
