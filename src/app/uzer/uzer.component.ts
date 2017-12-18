import { Component, OnInit } from '@angular/core';
import { UzerService } from './uzer.service';
import {NgForm} from '@angular/forms';
import {Uzer} from '../model/Uzer';

@Component({
  selector: 'uzer',
  templateUrl: './uzer.component.html'
})

export class UzerComponent implements OnInit {
  uzers: Uzer[];
  newUzer: Uzer = new Uzer();
  editing: boolean = false;
  editingUzer: Uzer = new Uzer();

  constructor(
    private uzerService: UzerService,
  ) {}

  ngOnInit(): void {
    this.getUzers();
  }

  getUzers(): void {
    this.uzerService.getUzers()
      .then(uzers => this.uzers = uzers );
  }

  createUzer(uzerForm: NgForm): void {
    this.uzerService.createUzer(this.newUzer)
      .then(createUzer => {
        uzerForm.reset();
        this.newUzer = new Uzer();
        this.uzers.unshift(createUzer)
      });
  }

  deleteUzer(id: string): void {
    this.uzerService.deleteUzer(id)
      .then(() => {
        this.uzers = this.uzers.filter(uzer => uzer.id != id);
      });
  }

  updateUzer(uzerData: Uzer): void {
    console.log(uzerData);
    this.uzerService.updateUzer(uzerData)
      .then(updatedUzer => {
        let existingUzer = this.uzers.find(uzer => uzer.id === updatedUzer.id);
        Object.assign(existingUzer, updatedUzer);
        this.clearEditing();
      });
  }



  editUzer(uzerData: Uzer): void {
    this.editing = true;
    Object.assign(this.editingUzer, uzerData);
  }

  clearEditing(): void {
    this.editingUzer = new Uzer();
    this.editing = false;
  }
}
