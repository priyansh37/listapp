import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  RoomDetailsData = new FormGroup({
    PackagePrice: new FormControl(''),
    PakageStartDate:new FormControl(''),
    PakageEndDate :new FormControl(''),
    TotalPakagePrice : new FormControl('')
  });

  @Input() details:any;
  @Input() selectedItem:any;
  total:any;
  log:any;
  alert: boolean =false;
  
  constructor() { }

  ngOnInit(): void {

  }


  logCheckbox(element:HTMLInputElement){
    this.log = `${element.checked ? 'true' : 'false'}`
  }
  
  Total(){
    debugger
    if(this.log == "true"){
      this.total = this.selectedItem.PackagePrice + this.selectedItem.ExtraBedPrice;
     }
     else{
       this.total = this.selectedItem.PackagePrice;
     }
     this.RoomDetailsData.setValue({
      PackagePrice: this.selectedItem.PackagePrice,
      TotalPakagePrice : this.total
      
     })
    return console.warn(this.RoomDetailsData.value)
    // debugger
  }
  closeAlert(){
    this.alert=false
  }
}
