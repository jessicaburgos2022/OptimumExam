import { Component, OnInit } from '@angular/core';

// inject sample services
import { SampleServiceService } from "src/app/service/sample-service.service";

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  constructor(public sampleservices: SampleServiceService) { }


  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    var cardheader = body.getElementsByClassName("card-header");
    for(var i = 0; i < cardheader.length; i++ ){
      cardheader[i].classList.add(this.sampleservices.newBackgroundColor)
    }
  }

}
