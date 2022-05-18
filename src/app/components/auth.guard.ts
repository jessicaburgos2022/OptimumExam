
import { Injectable } from "@angular/core";
import { CanActivate, Router} from "@angular/router";
import { AuthServiceService } from "../auth-service.service";
import { SampleServiceService } from "../service/sample-service.service";


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public auth: AuthServiceService, public router: Router,
    public sampleservices: SampleServiceService ) {}

  // canActivate(): boolean {
  //   if (!this.auth.isAuthenticated()) {
  //     this.router.navigate(["login"]);
  //     return false;
  //   }
  //   return true;
  // }


  canActivate(): boolean {
    if (this.sampleservices.isLoggedIn){
      return true;
    }
    else{
      this.router.navigate(["login"]);
      return false;
    }

  }
}
