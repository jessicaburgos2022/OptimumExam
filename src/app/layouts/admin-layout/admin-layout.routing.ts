// import { Routes } from '@angular/router';

// import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
// import { TablesComponent } from '../../pages/tables/tables.component';
// import { PlainSurveyComponent } from '../../pages/plain-survey/plain-survey.component';
// import { UsersAccountComponent } from '../../pages/users-account/users-account.component';


// export const AdminLayoutRoutes: Routes = [
//     { path: 'dashboard',      component: DashboardComponent },
//     { path: 'tables',         component: TablesComponent },
//     { path: 'plain-survey',      component: PlainSurveyComponent },
//     { path: 'users-account',      component: UsersAccountComponent },
// ];


import { AdminLayoutComponent } from "./admin-layout.component";

import { Routes } from "@angular/router";

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { PlainSurveyComponent } from '../../pages/plain-survey/plain-survey.component';
import { UsersAccountComponent } from '../../pages/users-account/users-account.component';

export const routes: Routes = [
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full",
      },
      {
        path: "dashboard",
        component: DashboardComponent,
        data: { returnUrl: window.location.pathname },
      },
      {
        path: "tables",
        component: TablesComponent,
        data: { returnUrl: window.location.pathname },
      },
    ],
  },
];
