import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-users-account',
  templateUrl: './users-account.component.html',
  styleUrls: ['./users-account.component.scss']
})
export class UsersAccountComponent implements OnInit {

  files: File[] = [];
  public isCollapsed = false;
  public isMenuCollapsed = true;
  closeResult = '';

  isUpload: boolean = false;
  isAddUser: boolean = false;


  constructor(private http: HttpClient, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);

    const formData = new FormData();

    for (var i = 0; i < this.files.length; i++) { 
      formData.append("file[]", this.files[i]);
    }

    this.http.post('http://localhost:8001/upload.php', formData)
    .subscribe(res => {
       console.log(res);
       alert('Uploaded Successfully.');
    })
}

onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
}


open(content) {
  this.modalService.open(content, {centered: true, windowClass: 'modal-addUser', size: 'sm'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

openuploadModal(contentUpload) {
  this.modalService.open(contentUpload, {centered: true, windowClass: 'modal-UploadUser', size: 'md'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}



private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }
}


}
