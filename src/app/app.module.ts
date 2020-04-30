import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {AuthentifModule} from "./modules/authentif/authentif.module";
import {ToastrModule} from "ngx-toastr";
import {MainModule} from "./modules/main/main.module";
import {Env} from "./env/env";
import {MatProgressBarModule} from "@angular/material/progress-bar";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatProgressBarModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      progressBar: true,
      preventDuplicates: true
    }),

    //vendor Module

    //App module
    AuthentifModule,
    MainModule
  ],
  providers: [Env],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {
}
