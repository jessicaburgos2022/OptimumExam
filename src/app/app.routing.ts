import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from "./components/auth.guard";
import { UserResolver } from "./resolvers/user.resolver";

const routes: Routes = [
  {
    path: "public",
    loadChildren: () =>
      import("src/app/layouts/other-layout/other-layout.module").then(
        (m) => m.OtherLayoutModule
      ),
  },
  
  {
    path: "private",
    canActivate: [AuthGuard],
    resolve: { user: UserResolver },
    loadChildren: () =>
      import("src/app/layouts/admin-layout/admin-layout.module").then(
        (m) => m.AdminLayoutModule
      ),
      
  },

  {
    path: "**",
    redirectTo: "public",
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [],
})
export class AppRoutingModule {}
