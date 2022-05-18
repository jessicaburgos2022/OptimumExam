import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgApexchartsModule} from 'ng-apexcharts';


import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { PlainSurveyComponent } from '../../pages/plain-survey/plain-survey.component';
import { UsersAccountComponent } from '../../pages/users-account/users-account.component';
import { SurveyComponent } from '../../pages/survey/survey.component'

    
@NgModule({
  imports: [
    CommonModule,
    NgApexchartsModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    NgxDropzoneModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    TablesComponent,
    PlainSurveyComponent,
    UsersAccountComponent,
    SurveyComponent
  ]
})

export class AdminLayoutModule {}