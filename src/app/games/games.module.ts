import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { AllListComponent } from './pages/all-list/all-list.component';
import { HttpClientModule } from '@angular/common/http';
import { InputComponent } from './sharedGames/input/input.component';


@NgModule({
  declarations: [
    AllListComponent,
    InputComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    HttpClientModule
  ]
})
export class GamesModule { }
