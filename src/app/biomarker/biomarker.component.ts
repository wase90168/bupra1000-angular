import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, Router} from '@angular/router';
import {Biomarker} from './biomarker';
import {BiomarkerService} from './biomarker.service';

@Component({
  selector: 'app-biomarker',
  templateUrl: './biomarker.component.html',
  styleUrls: ['./biomarker.component.css']
})
export class BiomarkerComponent implements OnInit {

  public data: Observable<Biomarker>;
  public message: string;

  constructor(private route: ActivatedRoute, private router: Router, private biomarkerService: BiomarkerService) {
  }

  ngOnInit() {

    this.getData();
  }


  getData() {
    this.biomarkerService.findAll().subscribe((datax: Biomarker) => this.data = datax['biomarkers']);

  }

  deleteEntry(id: string) {

    this.biomarkerService.deleteBiomarker(id).then((res: Response) => {

      this.ngOnInit();
    });

  }

  addBiomarker() {

    this.router.navigateByUrl('biomarker-edit/0');

  }

  editBiomarker(id: string) {
    this.router.navigateByUrl('biomarker-edit/' + id);
  }


}
