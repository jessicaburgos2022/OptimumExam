import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { UserModel } from "../models/user.model";
import { SampleServiceService } from "../service/sample-service.service";

@Injectable()
// export class UserResolver implements Resolve<UserModel> {
  export class UserResolver implements Resolve<any> {
  constructor(public sampleservices: SampleServiceService) {}

  // resolve(route: ActivatedRouteSnapshot): Observable<UserModel> {
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.sampleservices.userObject;
    // return JSON.parse(localStorage.getItem("userInfo"));
  }
}
