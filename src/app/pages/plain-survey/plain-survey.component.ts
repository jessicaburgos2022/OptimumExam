import { Component, OnInit } from '@angular/core';
import { NgbProgressbarConfig } from "@ng-bootstrap/ng-bootstrap";


// inject sample services
import { SampleServiceService } from "src/app/service/sample-service.service";

import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from "@angular/forms";

@Component({
  selector: 'app-plain-survey',
  templateUrl: './plain-survey.component.html',
  styleUrls: ['./plain-survey.component.scss']
})
export class PlainSurveyComponent implements OnInit {
  radioGroupForm!: FormGroup;
  radioButtonValue = 1;
  progressbar2 = "200";

  constructor(private formBuilder: FormBuilder, config: NgbProgressbarConfig, public sampleservices: SampleServiceService) {

    this.setSelectedRadio(1);

  }

  // ngOnInit(): void {
  // }

  ngOnInit() {
    this.radioGroupForm = this.formBuilder.group({
      model: 1,
    });

    var body = document.getElementsByTagName("body")[0];
    var cardheader = body.getElementsByClassName("card-header");
    for(var i = 0; i < cardheader.length; i++ ){
      cardheader[i].classList.add(this.sampleservices.newBackgroundColor)
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
