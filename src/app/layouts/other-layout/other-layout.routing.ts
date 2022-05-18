import { Routes } from "@angular/router";

// import { SurveyComponent } from "../../pages/survey/survey.component";
import { MyCounterComponent } from "../../my-counter/my-counter.component"; // for testing
import { LoginComponent } from "../../pages/login/login.component"; // for testing

import { OtherLayoutComponent } from "./other-layout.component";





export const routes: Routes = [

    
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },




//   {
//     path: "public/login",
//     component: LoginComponent,
//     data: { returnUrl: window.location.pathname },
//   },
//   {
//     path: "survey",
//     component: SurveyComponent,
//   },
];



// export const routes: Routes = [
//   {
//     path: "",
//     component: OtherLayoutComponent,
//     children: [
//       {
//         path: "",
//         redirectTo: "login",
//         pathMatch: "full",
//       },
//       {
//         path: "login",
//         component: LoginComponent,
//         data: { returnUrl: window.location.pathname },
//       },
//       {
//         path: "survey",
//         component: SurveyComponent,
//       },
//     ],
//   },
// ];

