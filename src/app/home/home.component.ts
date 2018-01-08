import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UzerLoginService} from '../uzer/uzer-login.service';
import {NavbarComponent} from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private uzerLoginService:NavbarComponent){

  }

  ngOnInit() {
  }


}
