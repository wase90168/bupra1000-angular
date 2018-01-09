import { Component, ViewEncapsulation } from '@angular/core';
import {Uzer} from '../uzer/uzer';
import {RegisterService} from './register.service';
import {Router} from '@angular/router';
import {UzerLoginService} from '../uzer/uzer-login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent {








  constructor(private registerService: RegisterService, private router: Router,private uzerLoginService: UzerLoginService){

  }

  uzer: Uzer = new Uzer();
  message: string;
  success: boolean;
  username: string;
  password: string;



  save(): void {


    this
      .registerService
      .createUzer(this.username, this.password)
      .then(uzer => {
          this.router.navigateByUrl("/login");
          this.message = "Account was created successfully!";
          this.uzerLoginService.setMessage(this.message);
          this.success = true;
          setTimeout(function() {
            this.message = false;
          }.bind(this), 3300);

          console.log(uzer);
        },
        (error) => {
          this.message = "An Error occured while creating the account!";
          this.success = false;
          setTimeout(function() {
            this.message = false;
          }.bind(this), 3300);

          console.log(error);
        });



  }



}
