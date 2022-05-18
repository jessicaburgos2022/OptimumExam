import { Component, OnInit } from "@angular/core";
// import { increment, decrement, reset } from "../../actions/user.actions";
import { setUserInformation } from "../../actions/user.actions";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AuthModel } from "./models/auth.model";
import { Router } from "@angular/router";
import { UserModel } from "src/app/models/user.model";
import { SampleServiceService } from "src/app/service/sample-service.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  count$: Observable<number>;

  username = "";
  password = "";
  auth: AuthModel = new AuthModel();
  constructor(
    private store: Store<{ count: number }>,
    private router: Router,
    public sampleservices: SampleServiceService
  ) {}

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("bg-default");
  }

  setPassword(val) {
    this.auth.password = val;
  }

  setUsername(val) {
    this.auth.username = val;
  }

  setUserInformation() {
    if (this.auth.username === "admin" && this.auth.password === "admin") {
      const userObject: UserModel = {
        username: "admin",
        password: "admin",
        firstname: "John",
        lastname: "Mayer",
        status: "Active",
      };
      localStorage.setItem("token", "kajsdkajskd1123124");
      localStorage.setItem("userInfo", JSON.stringify(userObject));
      this.router.navigateByUrl("private/dashboard");
    }
  }

  login(){

    const userObject: UserModel = {
      username: "admin",
      password: "admin",
      firstname: "John",
      lastname: "Mayer",
      status: "Active",
    };

    this.sampleservices.checkLogin(this.auth.username, this.auth.password, userObject);
    if(this.sampleservices.isLoggedIn){
      this.router.navigateByUrl("private/dashboard");
    }
  }
}
