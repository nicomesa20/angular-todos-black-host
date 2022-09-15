import { Component, Input, OnInit, Output,EventEmitter  } from '@angular/core';
import { Todo } from '../../interfaces/todo.interface';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  @Input()  todoText = '';
  @Output() createTodo = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.createTodo.emit(this.todoText)
    this.todoText = '';
  }

}
