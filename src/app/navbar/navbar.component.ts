import { Component, OnInit, Renderer, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import {LoginComponent} from '../login/login.component';
import {UzerLoginService} from '../uzer/uzer-login.service';

@Component({
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
})
export class NavbarComponent {

  constructor(private uzerLoginService:UzerLoginService,private router:Router){

  }

  isLoggedIn(): boolean{
    return this.uzerLoginService.isLoggedIn();
  }

  logOut() {
    this.uzerLoginService.logOut();
    this.router.navigateByUrl('/login');
  }


  private sidebarVisible: boolean = false;

    private login : UzerLoginService;

    sidebarToggle(){
        var body = document.getElementsByTagName('body')[0];

        if(this.sidebarVisible == false){
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }

   }
