import { Component, OnInit } from '@angular/core';
import { Todo } from './interfaces/todo.interface';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  todos: Todo[] = []
  todoText = '';

  constructor(
    private readonly todoService: TodoService,
  ) { }

  ngOnInit() {
    this.loadTodos()
  }

  loadTodos() {
    const newTodo: Partial<Todo> = {
      completed: false,
      value: this.todoText
    }
    this.todoService.listTodos().subscribe(todos => this.todos = todos)
  }

  onSubmit() {
    const newTodo: Partial<Todo> = {
      completed: false,
      value: this.todoText
    }
    this.todoService.addTodo(newTodo)
      .subscribe(
        () => console.log('🔥 Tarea creada!'),
      )
  }

  onDelete(id: number) {
    this.todoService.removeTodo(id).subscribe(
      () => console.log('🔥 Tarea creada!'),
    )
  }

  onUpdate() {

  }

}
