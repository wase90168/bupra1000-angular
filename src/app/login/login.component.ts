import {UzerLoginService} from '../uzer/uzer-login.service';
import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{


  constructor(private uzerLoginService:UzerLoginService,private router:Router){

  }

  ngOnInit(){
    this.isLoggedIn = this.uzerLoginService.isLoggedIn();
  }

  isLoggedIn:boolean;
  username:string;
  password:string;
  message:string = this.uzerLoginService.getMessage();


  login(){
    this.uzerLoginService.fetchTokenUsingPasswordFlowAndLoadUserProfile(this.username,this.password).then((response) => {
      console.log(this.uzerLoginService.getUserInfos());
      this.router.navigateByUrl('/home')    }).catch((error) => {
      // console.log(error);
      this.message = "Error while trying to authenticate!";
      setTimeout(function() {
        this.message = "";
        this.message = false;
      }.bind(this), 3000);
    });

  }


  logOut(){
    this.uzerLoginService.logOut()
    this.router.navigateByUrl('/login')
  }






}
