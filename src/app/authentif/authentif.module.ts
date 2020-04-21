import {NgModule} from '@angular/core';
import {AuthComponent} from './auth/auth.component';
import {RouterModule, Routes} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatInputModule} from "@angular/material/input";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {MatDividerModule} from "@angular/material/divider";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {ReactiveFormsModule} from "@angular/forms";
import {MatGridListModule} from "@angular/material/grid-list";


const routes: Routes = [
  {path: 'authentification', component: AuthComponent}
];

@NgModule({
  declarations: [AuthComponent],
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatToolbarModule, MatInputModule, MatCardModule, MatMenuModule,
    MatIconModule, MatButtonModule, MatTableModule, MatDividerModule,
    MatSlideToggleModule, MatSelectModule, MatOptionModule,
    MatProgressSpinnerModule,MatGridListModule
  ],
  providers: [],
  bootstrap: [AuthComponent],

  exports: [
    AuthComponent,
  ]

})
export class AuthentifModule {
}
