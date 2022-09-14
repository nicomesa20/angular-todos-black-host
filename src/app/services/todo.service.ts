import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Todo } from '../interfaces/todo.interface';
import { Observable } from 'rxjs'
import { uid } from 'uid'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private readonly api = 'localhost:3000/task'

  constructor(
    private readonly http: HttpClient
  ) { }

  listTodos() {
    return this.http.get<Todo[]>(this.api)
  }

  addTodo(todo: Partial<Todo>) {
    return this.http.post(this.api, { ...todo, id: uid() })
  }

  editTodo(id: number, todo: Todo) {
    return this.http.put(`${this.api}/${id}`, todo)
  }

  removeTodo(id: number) {
    return this.http.delete(`${this.api}/${id}`)
  }
}
