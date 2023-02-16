import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { AllListComponent } from './pages/all-list/all-list.component';
import { HttpClientModule } from '@angular/common/http';
import { InputComponent } from './sharedGames/input/input.component';
import { FormsModule } from '@angular/forms';
import { GameDetailsComponent } from './pages/game-details/game-details.component';


@NgModule({
  declarations: [
    AllListComponent,
    InputComponent,
    InputComponent,
    GameDetailsComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class GamesModule { }
