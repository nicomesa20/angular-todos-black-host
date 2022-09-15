import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../interfaces/todo.interface';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo | undefined;
  @Output() deleteTodo = new EventEmitter();
  @Output() editTodo = new EventEmitter();

  editing = false;

  constructor() {}

  ngOnInit(): void {}

  onDeleteClicked() {
    this.deleteTodo.next(this.todo!.id);
  }

  toggleEditFlag() {
    this.editing = !this.editing;
  }

  onEditTodo(key: keyof Todo, value: any) {
    this.todo = {
      ...this.todo,
      [key]: value,
    } as Todo;
    this.editTodo.emit(this.todo);
  }
}
