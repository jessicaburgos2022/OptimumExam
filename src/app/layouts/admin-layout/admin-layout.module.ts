import { Routes } from "@angular/router";

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ClipboardModule } from 'ngx-clipboard';

// import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { PlainSurveyComponent } from '../../pages/plain-survey/plain-survey.component';
import { UsersAccountComponent } from '../../pages/users-account/users-account.component';


import { SurveyComponent } from '../../pages/survey/survey.component'

import { MyCounterComponent } from '../../my-counter/my-counter.component' // for testing


import { NgxDropzoneModule } from 'ngx-dropzone';

import { AdminLayoutComponent } from "./admin-layout.component";


  
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {NgApexchartsModule} from 'ng-apexcharts';


// const routes: Routes = [
//   {
// 				path: '',
// 				redirectTo: 'dashboard',
// 				pathMatch: 'full'
// 			},
//       {
// 				path: 'dashboard',
// 				component: DashboardComponent,
// 				data: {returnUrl: window.location.pathname}
// 			},
//       {
// 				path: 'tables',
// 				component: TablesComponent,
// 				data: {returnUrl: window.location.pathname}
// 			}
//   ];



  const routes: Routes = [
    {
      path: '',
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
        
        
        
      ]
    }];

    


@NgModule({
  imports: [
    CommonModule,
    NgApexchartsModule,
    // RouterModule.forChild(AdminLayoutRoutes),
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    NgxDropzoneModule,
    ReactiveFormsModule // to know that [formGroup] is a part angular forms
  ],
  declarations: [
    DashboardComponent,
    TablesComponent,
    PlainSurveyComponent,
    SurveyComponent,
    UsersAccountComponent,
    MyCounterComponent // for testing
  ]
})

export class AdminLayoutModule {}
