import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { OtherLayoutComponent } from "./layouts/other-layout/other-layout.component";
import { UsersAccountComponent } from "./pages/users-account/users-account.component";

import { AuthGuard } from "./components/auth.guard";
import { LoginComponent } from "./pages/login/login.component";
import { UserResolver } from "./resolvers/user.resolver";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "public",
    loadChildren: () =>
      import("src/app/layouts/other-layout/other-layout.module").then(
        (m) => m.OtherLayoutModule
      ),
  },

  // create a private module

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
