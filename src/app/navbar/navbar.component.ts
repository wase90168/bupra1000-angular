import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UzerLoginService} from '../uzer/uzer-login.service';
import {SidebarComponent} from "../sidebar/sidebar.component";

@Component({
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
})
export class NavbarComponent implements OnInit{

  constructor(private uzerLoginService:UzerLoginService,private router:Router, private sidebar: SidebarComponent){

  }

  ngOnInit(){
    this.isLoggedIn = this.uzerLoginService.isLoggedIn();
    return this.isLoggedIn;
  }

  isLoggedIn:boolean;
  username:string;

  getUsername() {
    this.username = this.uzerLoginService._storage.getItem('username');
    return this.username;
  }


  logOut() {
    this.uzerLoginService.logOut();
    this.router.navigateByUrl('/login');
    this.ngOnInit()
  }

  logIn() {
    this.ngOnInit();
    this.sidebar.ngOnInit();

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
