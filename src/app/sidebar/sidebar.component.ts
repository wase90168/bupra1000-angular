import {Component, OnInit} from '@angular/core';
import {UzerLoginService} from "../uzer/uzer-login.service";
import {Uzer} from "../uzer/uzer";
import {Role} from "../role/role";


@Component({
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {

  private uzer: Uzer;
  private admin:boolean = false;
  private role: Role;

  constructor(private uzerLoginService:UzerLoginService){}

  ngOnInit() {

    /*this.uzer = JSON.parse(this.uzerLoginService._storage.getItem('userInfo'));

    for(let role of this.uzer.roles)
    {
      if(role.name == 'ROLE_ADMIN' )
      {
        this.admin = true
      }
    }*/
    this.admin = this.uzerLoginService.admin;
    return this.admin;




  }

  isAdmin(): boolean{
    return this.admin;
  }









}
