import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { LoginComponent } from '../../pages/login/login.component';
import { OtherLayoutRoutes } from './other-layout.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(OtherLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
   declarations: [ LoginComponent ]
})
export class OtherLayoutModule { }
