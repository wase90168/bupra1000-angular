import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable()
export class AppService {

  baseURL: string = "http://localhost:8080"

  constructor(private router: Router) {


  }

  getBaseURL():string{
    return this.baseURL;
  }










}
