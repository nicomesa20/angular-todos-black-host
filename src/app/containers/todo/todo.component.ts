import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo.interface';
import { TodoService } from 'src/app/services/todo.service';
import { fadeAnimation } from '../../animations/todo.animation';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  animations: [fadeAnimation],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private readonly todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.listTodos().subscribe((todos) => (this.todos = todos));
  }

  onCreateTodo(value: string) {
    const newTodo: Partial<Todo> = {
      completed: false,
      value,
    };
    this.todoService
      .addTodo(newTodo)
      .subscribe(() => this.successResponseHandler('🔥 Tarea creada!'));
  }

  onDelete(id: string) {
    this.todoService
      .removeTodo(id)
      .subscribe(() => this.successResponseHandler('🔥 Tarea eliminada!'));
  }

  onUpdate(todo: Todo) {
    this.todoService
      .editTodo(todo.id, todo)
      .subscribe(() => this.successResponseHandler('🔥 Tarea editada!'));
  }

  successResponseHandler(message: string) {
    this.loadTodos();
    console.log(message);
  }
}
