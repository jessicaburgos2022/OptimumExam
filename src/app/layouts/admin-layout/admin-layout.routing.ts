import { AdminLayoutComponent } from "./admin-layout.component";
import { DashboardComponent } from "src/app/pages/dashboard/dashboard.component";
import { TablesComponent } from "src/app/pages/tables/tables.component";
import { UsersAccountComponent } from "src/app/pages/users-account/users-account.component";
import { SurveyComponent } from "src/app/pages/survey/survey.component";
import { Routes } from '@angular/router';
import { PlainSurveyComponent } from "src/app/pages/plain-survey/plain-survey.component";
import { ThemeSettingsComponent } from "src/app/pages/theme-settings/theme-settings.component";

// Guards
import { AuthGuard } from "src/app/components/auth.guard";
import { UserResolver } from "src/app/resolvers/user.resolver";

export const AdminLayoutRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    resolve: { user: UserResolver },
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {returnUrl: window.location.pathname}
      },
      {
        path: 'tables',
        component: TablesComponent,
        data: {returnUrl: window.location.pathname}
      },

      {
        path: 'user-account',
        component: UsersAccountComponent,
        data: {returnUrl: window.location.pathname}
      },

      {
        path: 'survey',
        component: SurveyComponent,
        data: {returnUrl: window.location.pathname}
      },


      {
        path: 'plain-survey',
        component: PlainSurveyComponent,
        data: {returnUrl: window.location.pathname}
      },

      {
        path: 'user-account',
        component: UsersAccountComponent,
        data: {returnUrl: window.location.pathname}
      },
      {
        path: 'theme-settings',
        component: ThemeSettingsComponent,
        data: {returnUrl: window.location.pathname}
      },
    
    ]
  }];