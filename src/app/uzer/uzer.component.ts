import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Uzer} from '../model/Uzer';

@Component({
  selector: 'uzer',
  templateUrl: './uzer.component.html'
})

export class UzerComponent implements OnInit {
  uzers: Uzer[];
  //newUzer: Uzer = new Uzer();
  editing: boolean = false;
  //editingUzer: Uzer = new Uzer();

  ngOnInit(): void {
    this.getUzers();
  }

  getUzers(): void {

  }

  createUzer(uzerForm: NgForm): void {

  }

  deleteUzer(id: string): void {

  }

  updateUzer(uszerData: Uzer): void {

  }

  toggleCompleted(todoData: Uzer): void {

  }

  editUzer(uzerData: Uzer): void {

  }

  clearEditing(): void {

  }
}
