import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RouterModule, Routes} from "@angular/router";
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {ResumeComponent} from './resume/resume.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MainRoutingModule} from "./main-routing.module";
import {UtilisateurComponent} from './utilisateur/utilisateur.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatStepperModule} from "@angular/material/stepper";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {PersonneService} from "./service/personne.service";
import {UtilisateurListComponent} from './utilisateur/utilisateur-list/utilisateur-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {EditorComponent} from './editor/editor.component';
import {AngularEditorModule} from "@kolkov/angular-editor";
import {MatGridListModule} from "@angular/material/grid-list";
import {NgxCsvParserModule} from "ngx-csv-parser";
import {MaterialFileInputModule} from "ngx-material-file-input";
import {AvatarModule} from "ngx-avatar";

@NgModule({
  declarations: [DashboardComponent, ResumeComponent,
    UtilisateurComponent, UtilisateurListComponent, EditorComponent],
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    MainRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    MatMenuModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatTableModule,
    ReactiveFormsModule,
    MatSortModule,
    MatPaginatorModule,
    MatGridListModule,
    AngularEditorModule,
    NgxCsvParserModule,
    AvatarModule,
    FormsModule,
    MaterialFileInputModule
  ],
  providers: [PersonneService],
  bootstrap: [DashboardComponent]
})
export class MainModule {
}
