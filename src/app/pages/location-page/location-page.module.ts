import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationPageRoutingModule } from './location-page-routing.module';
import { LocationComponent } from './components/location/location.component';


@NgModule({
  declarations: [
    LocationComponent
  ],
  imports: [
    CommonModule,
    LocationPageRoutingModule
  ]
})
export class LocationPageModule { }
