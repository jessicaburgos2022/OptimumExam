import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { OtherLayoutComponent } from "./layouts/other-layout/other-layout.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app.routing";
import { ComponentsModule } from "./components/components.module";

import { BrowserModule } from "@angular/platform-browser";

import { StoreModule } from "@ngrx/store";
import { counterReducer } from "./reducers/counter.reducer";
import { userReducer } from "./reducers/user.reducer";

import { AuthGuard } from "./components/auth.guard";
import { UserResolver } from "./resolvers/user.resolver";

const combinedReducer = {
  count: counterReducer,
  user: userReducer,
};

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot(combinedReducer),
  ],

  declarations: [AppComponent, AdminLayoutComponent, OtherLayoutComponent],
  providers: [AuthGuard, UserResolver],
  bootstrap: [AppComponent],
})
export class AppModule {}
