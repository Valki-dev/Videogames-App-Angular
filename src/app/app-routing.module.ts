import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesModule } from './games/games.module';

const routes: Routes = [
  {path: "games", loadChildren: () => import('./games/games.module').then(response => response.GamesModule)},
  {path: "**", redirectTo: "games"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
