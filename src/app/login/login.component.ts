import {UzerLoginService} from '../uzer/uzer-login.service';
import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {SidebarComponent} from '../sidebar/sidebar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{

  public isLoggedIn = false;


  constructor(private uzerLoginService:UzerLoginService,private router:Router, private sidebar: SidebarComponent){

  }

  ngOnInit(){
    this.isLoggedIn = this.uzerLoginService.isLoggedIn();
  }




  username:string;
  password:string;
  message:string = this.uzerLoginService.getMessage();


  login(){

    this.uzerLoginService.loadUserProfile(this.username,this.password).then((response) => {
      this.router.navigateByUrl('/home')
    }).catch((error) => {
      // console.log(error);
      this.message = "Error while trying to authenticate!";
      setTimeout(function() {
        this.message = "";
        this.message = false;
      }.bind(this), 3000);
    });


  }






  logOut(){
    this.uzerLoginService.logOut();
    this.router.navigateByUrl('/login')
  }








}
