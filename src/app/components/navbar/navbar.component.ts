import { Component, OnInit, ElementRef } from "@angular/core";
import { ROUTES } from "../sidebar/sidebar.component";
import {
  Location,
  LocationStrategy,
  PathLocationStrategy,
} from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import { UserModel } from "src/app/models/user.model";
import { SampleServiceService } from "src/app/service/sample-service.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  public LoggedInUser: UserModel;
  constructor(
    location: Location,
    private element: ElementRef,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    // public test: SampleServiceService
  ) {
    this.location = location;
    // this.test = test;

    const loggedInUser = {
      firstname: activatedRouter.snapshot.data.user.firstname,
      lastname: activatedRouter.snapshot.data.user.lastname,
      password: activatedRouter.snapshot.data.user.password,
      status: activatedRouter.snapshot.data.user.status,
      username: activatedRouter.snapshot.data.user.username,
    } as UserModel;
    this.LoggedInUser = loggedInUser;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter((listTitle) => listTitle);
  }
  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === "#") {
      titlee = titlee.slice(1);
    }

    for (var item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return "Dashboard";
  }
}
