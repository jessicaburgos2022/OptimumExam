import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleServiceService {

  public myString = "blah blah";
  public userObject: any;
  public isLoggedIn = false;
  constructor() { }


  checkLogin(username: string, password: string, user:any){
    if (username == "admin" && password == "admin" ){
      this.isLoggedIn = true;
      this.userObject = user;
    }
    else{
      this.isLoggedIn = false;
    }
    return this.isLoggedIn;

  }
}
