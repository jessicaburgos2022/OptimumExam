import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleServiceService {

  public myString = "blah blah";
  public userObject: any;
  public isLoggedIn = false;
  
  public isChangeBackgroundColor = false;
  public newBackgroundColor = "";

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


  changebgColors(ischangebg: boolean, selectedbg: string){

    if (ischangebg){
      if ( selectedbg == "red"){
        this.newBackgroundColor = "bg-red";
      }

      else if ( selectedbg == "blue"){
        this.newBackgroundColor = "bg-info";
      }

      else if ( selectedbg == "green"){
        this.newBackgroundColor = "bg-green";
      }

      else if ( selectedbg == "black"){
        this.newBackgroundColor = "bg-dark";
      }
      
      this.isChangeBackgroundColor = true;
    }
    else
    {
      this.isChangeBackgroundColor = false;
      selectedbg == ""
    }
    
  }
}
