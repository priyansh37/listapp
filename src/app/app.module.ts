import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestoBlockComponent } from './resto-block/resto-block.component';
import { ImgBlockComponent } from './img-block/img-block.component';
import { DetailsgBlockComponent } from './detailsg-block/detailsg-block.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { IndexComponent } from './index/index.component';
import { RoomSelectComponent } from './room-select/room-select.component';
import { SafePipeModule } from 'safe-pipe';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RestoBlockComponent,
    ImgBlockComponent,
    DetailsgBlockComponent,
    HotelDetailsComponent,
    IndexComponent,
    RoomSelectComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule,
    SafePipeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    library.add(fas, far);
  }
 }
