import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesPageRoutingModule } from './episodes-page-routing.module';
import { EpisodiesComponent } from './components/episodies/episodies.component';


@NgModule({
  declarations: [
    EpisodiesComponent
  ],
  imports: [
    CommonModule,
    EpisodesPageRoutingModule
  ]
})
export class EpisodesPageModule { }
