import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {Routes} from "@angular/router";


const routes : Routes = [
  {path:'/dashboard', component:DashboardComponent}
]

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
  ],
  providers:[],
  bootstrap:[DashboardComponent]
})
export class MainModule { }
