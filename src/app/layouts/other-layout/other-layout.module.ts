import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { OtherLayoutRoutes } from './other-layout.routing';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { SurveyComponent } from '../../pages/survey/survey.component';

import { MyCounterComponent } from '../../my-counter/my-counter.component' // for testing
import { LoginComponent } from '../../pages/login/login.component' // for testing

import { OtherLayoutComponent } from './other-layout.component';


import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
		component: OtherLayoutComponent,
		children: [
			{
				path: '',
				redirectTo: 'login',
				pathMatch: 'full'
			},
      {
				path: 'login',
				component: LoginComponent,
				data: {returnUrl: window.location.pathname}
			}
    ]
  }];





@NgModule({
  imports: [
    CommonModule,
    // RouterModule.forChild(OtherLayoutRoutes),
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule, // to know that [formGroup] is a part angular forms
    NgbModule
  ],
   declarations: []
  // declarations: [
  //   SurveyComponent
  // ]
})
export class OtherLayoutModule { }
