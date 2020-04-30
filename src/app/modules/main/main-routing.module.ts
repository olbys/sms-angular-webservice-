import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ResumeComponent} from "./resume/resume.component";
import {UtilisateurComponent} from "./utilisateur/utilisateur.component";
import {UtilisateurListComponent} from "./utilisateur/utilisateur-list/utilisateur-list.component";
import {EditorComponent} from "./editor/editor.component";


const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {path: '', component: ResumeComponent},
      {path: 'utilisateur', component: UtilisateurListComponent},
      {path: 'utilisateur/add', component: UtilisateurComponent},
      {path: 'editor/sms', component: EditorComponent},
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
