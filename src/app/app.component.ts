import { Component, Input } from '@angular/core';
import { BookingService } from './booking.service';
import { ListPropert } from './list-propert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'listapp';
  constructor(private list:BookingService) { }

  collection: ListPropert;
  ngOnInit(): void {
    this.list.getlist().subscribe((result)=>{(result)
      this.collection = result;
    })
  }
}
