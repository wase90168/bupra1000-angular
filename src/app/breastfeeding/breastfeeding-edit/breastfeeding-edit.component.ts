import {Component, OnInit} from '@angular/core';

import {Breastfeeding} from "../breastfeeding";
import {ActivatedRoute, Router} from "@angular/router";
import {BreastfeedingService} from "../breastfeeding.service";

@Component({
  selector: 'app-breastfeeding-edit',
  templateUrl: './breastfeeding-edit.component.html',
  styleUrls: ['./breastfeeding-edit.component.css']
})
export class BreastfeedingEditComponent implements OnInit {

  id: string;

  breastfeeding: Breastfeeding;


  constructor(private breastfeedingService: BreastfeedingService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.route.data.subscribe(
      data => {
        this.breastfeeding = data['breastfeeding'];
      }
    );

  }

  updateBreastfeeding(breastfeeding: Breastfeeding) {
    this.breastfeedingService.updateBreastfeeding(breastfeeding).then(exec => this.router.navigateByUrl('breastfeeding'));

  }

  createBreastfeeding(breastfeeding: Breastfeeding) {
    this.breastfeedingService.createBreastfeeding(breastfeeding).then(exec => this.router.navigateByUrl('breastfeeding'));

  }

  cancel(){
    this.router.navigateByUrl('breastfeeding');
  }


}
