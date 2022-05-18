import { Component, OnInit } from "@angular/core";

import { SampleServiceService } from "src/app/service/sample-service.service";

@Component({
  selector: "app-theme-settings",
  templateUrl: "./theme-settings.component.html",
  styleUrls: ["./theme-settings.component.scss"],
})
export class ThemeSettingsComponent {
  constructor(public sampleservices: SampleServiceService) {}

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    var cardheader = body.getElementsByClassName("card-header");
    for (var i = 0; i < cardheader.length; i++) {
      cardheader[i].classList.add(this.sampleservices.newBackgroundColor);
    }
  }

  changeBG(color: string) {
    this.sampleservices.changebgColors(true, color);
    if (this.sampleservices.isChangeBackgroundColor) {
      var body = document.getElementsByTagName("body")[0];
      var cardheader = body.getElementsByClassName("card-header");
      for (var i = 0; i < cardheader.length; i++) {
        cardheader[i].setAttribute(
          "class",
          "card-header" + " " + this.sampleservices.newBackgroundColor
        );
      }
    }
  }
}
