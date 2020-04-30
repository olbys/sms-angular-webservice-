import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, shareReplay} from "rxjs/operators";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  navTitles: Array<{ name: string, path: string }>;


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {
    this.navTitles = [
      {name:'Dashboard', path:''},
      {name:'Utilisateurs', path:'utilisateur'},
      {name:'Editors', path:'editor/sms'},
      {name:'Authentification', path:'/authentification'},

    ]
    console.log(this.navTitles);
  }

  ngOnInit(): void {

  }


  showFiller = false;

  snavToggle(snav) {

  }


}
