import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {OAuthService} from "angular-oauth2-oidc";

@Injectable()
export class AppService {

  baseURL: string = "http://localhost:8080"

  constructor(private router: Router) {


  }

  getBaseURL():string{
    return this.baseURL;
  }










}
