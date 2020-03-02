import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TwocompComponent } from './twocomp/twocomp.component';


const routes: Routes = [
  {path: '', component: TwocompComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TwoRoutingModule { }
