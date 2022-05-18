import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import { UserModel } from "./models/user.model";

@Injectable({
  providedIn: "root",
})
export class AuthServiceService {
  public isAuthenticated(): boolean {
    const token = localStorage.getItem("token");
    return token !== undefined;
  }
}
