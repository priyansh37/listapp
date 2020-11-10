import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { ListPropert } from '../list-propert';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private list:BookingService) { }

  collection: ListPropert;
  ngOnInit(): void {
    this.list.getlist().subscribe((result)=>{console.warn(result)
      this.collection = result;
    })
  }

}
