import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { IndexComponent } from './index/index.component';
import { RestoBlockComponent } from './resto-block/resto-block.component';

const routes: Routes = [
  {
    component : HotelDetailsComponent,
    path:'HotelDetail/:PropertyGUID'
  },
  {
    component : RestoBlockComponent,
    path :'HotelList'
  },
  {
    component : IndexComponent,
    path :'' //index
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash:true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
