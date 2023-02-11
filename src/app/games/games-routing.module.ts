import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllListComponent } from './pages/all-list/all-list.component';

const routes: Routes = [
  {path: '', children: [
    {path: 'all', component: AllListComponent},
    {path: '**', redirectTo: 'all'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
