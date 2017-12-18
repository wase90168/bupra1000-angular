import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Uzer} from '../model/Uzer';

@Component({
  selector: 'uzer',
  templateUrl: './uzer.component.html'
})

export class UzerComponent implements OnInit {
  todos: Uzer[];
  newTodo: Uzer = new Uzer();
  editing: boolean = false;
  editingTodo: Uzer = new Uzer();

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {

  }

  createTodo(todoForm: NgForm): void {

  }

  deleteTodo(id: string): void {

  }

  updateTodo(todoData: Todo): void {

  }

  toggleCompleted(todoData: Todo): void {

  }

  editTodo(todoData: Todo): void {

  }

  clearEditing(): void {

  }
}
