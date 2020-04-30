import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthComponent} from "./auth/auth.component";

const routes: Routes = [
  { path: 'authentification', component: AuthComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AuthentifRoutingModule {
}
