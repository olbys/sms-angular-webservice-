import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from "./modules/main/dashboard/dashboard.component";

const routes: Routes = [
  {path: '', redirectTo:'/dashboard', pathMatch:'full'}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
