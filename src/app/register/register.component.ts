import {Component, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Uzer} from '../uzer/uzer';
import {Router} from '@angular/router';
import {UzerLoginService} from '../uzer/uzer-login.service';
import {UzerService} from '../uzer/uzer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  @Output() message: string;








  constructor(private uzerService: UzerService, private router: Router,private uzerLoginService: UzerLoginService){

  }

  uzer: Uzer = new Uzer();
  @Input() password: string;
  success: boolean;
  username: string;
  @Input() passwordValid: string;

  ngOnInit(): void {

  }

  save(): void {

    if (this.uzer.password == this.passwordValid) {


      this
        .uzerService
        .createUzer(this.uzer)
        .then(uzer => {

            this.message = "Account was created successfully!";
            this.success = true;
            setTimeout(function() {
              this.message = false;
            }.bind(this), 3300);

            console.log(uzer);

            this.ngOnInit();
          },
          (error) => {
            this.message = "An Error occured while creating the account!";
            this.success = false;
            setTimeout(function() {
              this.message = false;
            }.bind(this), 3300);

            console.log(error);
            this.ngOnInit();
          });
    }
    else {
      this.message = 'Passwords does not match!';
    }



  }



}
