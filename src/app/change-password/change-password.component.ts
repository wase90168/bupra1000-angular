import {Component, Input, OnInit, Output} from '@angular/core';
import {UzerLoginService} from '../uzer/uzer-login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  @Input() password: string;

  @Input() passwordValid: string;

  @Input() passwordOld: string;

  @Output() error: string;

  @Output() success: string;

  constructor(private uzerLoginService: UzerLoginService, private router: Router) {
  }

  ngOnInit() {

  }

  change() {
    if (this.password == this.passwordValid) {
      this.error = null;
      this.success = null;
      this.uzerLoginService.changePassword(this.password, this.passwordOld).catch((err) => this.error = 'Password has not been changed!').then((exec) => {
        if (this.error == null) {
          this.success = 'Password has been changed';
          this.router.navigateByUrl('home');
        }
      });

    }
    else {
      this.success = null;
      this.error = 'Passwords do not match!';
    }
  }


}
