import { Component, OnInit } from "@angular/core";
import { NgbProgressbarConfig } from "@ng-bootstrap/ng-bootstrap";

import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from "@angular/forms";

@Component({
  selector: "app-survey",
  templateUrl: "./survey.component.html",
  styleUrls: ["./survey.component.scss"],
})
export class SurveyComponent implements OnInit {
  /*test start */
  radioGroupForm!: FormGroup;
  // thoughtsGroupForm!: FormGroup;
  // progressGroupForm!: FormGroup;
  /*test end */

  personalDetails!: FormGroup;
  addressDetails!: FormGroup;
  educationalDetails!: FormGroup;

  // slide1! : FormGroup;
  // slide2! : FormGroup;
  // slide3! : FormGroup;

  progressbar = "200";
  progressbar2 = "200";
  personal_step = false;
  address_step = false;
  education_step = false;

  step = 1;
  slide1 = false;
  slide2 = false;
  slide3 = false;
  slide4= false;

  radioButtonValue = 1;

  // form: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder, config: NgbProgressbarConfig) {
    config.max = 1000;
    config.striped = true;
    config.animated = true;
    config.type = "success";
    config.height = "20px";

    this.setSelectedRadio(1);
  }

  ngOnInit() {
    this.radioGroupForm = this.formBuilder.group({
      model: 1,
    });

    // this.thoughtsGroupForm = this.formBuilder.group({
    //   // message: ["", Validators.required],
    //   message: [""],
    // });

    // this.progressGroupForm = this.formBuilder.group({
    //   // message: ["", Validators.required],
    //   message: [""],
    // });
  }

  get pBar() {
    return this.progressbar;
  }

  // get message() {
  //   return this.thoughtsGroupForm.controls;
  // }


  next() {
    if (this.step == 1) {
      this.slide1 = true;
      this.step++;
      this.progressbar = "400";
    }

    else if (this.step == 2) {
      this.slide2 = true;
      // if (this.thoughtsGroupForm.invalid) {
      //   return;
      // }
      this.step++;
      this.progressbar = "800";
    }
    else if (this.step == 3) {
      this.slide3 = true;
      // if (this.thoughtsGroupForm.invalid) {
      //   return;
      // }

      this.step++;
    }

  }

  previous() {
    this.step--;

    if (this.step == 1) {
      this.slide1 = false;
    }
    if (this.step == 2) {
      this.slide2 = false;
    }
  }

  submit() {
    if (this.step == 3) {
      this.slide4 = true;
      this.progressbar = "1000";
      this.step++;
      // if (this.SlideFormGroup.invalid) {
      //   return;
      // }
      // alert("Well done!!");
    }
  }

  setSelectedRadio(val: number) {
    console.log(val);
    this.radioButtonValue = val;
  }
  isRadioSelected(val: number): Boolean {
    return this.radioButtonValue === val;
  }
  
  slideProgressBar(){
    this.progressbar2 = "1000";
  }

}