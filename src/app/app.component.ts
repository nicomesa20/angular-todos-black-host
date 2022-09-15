import { Component, OnInit } from '@angular/core';
import { Todo } from './interfaces/todo.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  todos: Todo[] = []
  todoText = '';

  constructor(
  ) { }

  ngOnInit() {
  }

}
