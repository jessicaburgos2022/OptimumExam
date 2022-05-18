import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SampleServiceService } from 'src/app/service/sample-service.service';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: 'tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: 'survey', title: 'Survey',  icon:'ni-single-copy-04 text-yellow', class: '' },
    { path: 'plain-survey', title: 'Plain survey',  icon:'ni-single-copy-04 text-blue', class: '' },
    { path: 'user-account', title: 'Users account',  icon:'fa fa-users text-orange', class: '' },
    { path: 'theme-settings', title: 'Theme Settings',  icon:'fa fa-users text-orange', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router,
    // public asdm: SampleServiceService
    ) {

      // this.asdm = asdm;
    }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
