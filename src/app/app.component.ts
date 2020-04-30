import {Component, OnInit} from '@angular/core';
import {Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sms-app';
  loading: boolean = true;

  constructor(private route: Router) {

    this.route.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart : {
          this.loading = true;
          break;
        }
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {

          setTimeout(()=>{
            this.loading = false;
          },1200);
          break;
        }
        default : {
          break;
        }
      }

    })

  }

}
