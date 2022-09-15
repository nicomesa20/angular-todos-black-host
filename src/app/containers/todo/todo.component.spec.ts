import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';
import { TodoService } from '../../services/todo.service';
import { of } from 'rxjs';

const todoServiceMock = {
  listTodos: () =>
    of([
      {
        id: '123',
        value: 'nada',
        completed: false,
      },
      {
        id: '1234',
        value: 'nada',
        completed: false,
      },
    ]),
  
};

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let todoService: TodoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoComponent],
      providers: [
        {
          provide: TodoService,
          useValue: todoServiceMock,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    todoService = TestBed.inject(TodoService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit', () => {
    const loadTodosSpy = spyOn(component, 'loadTodos');
    component.ngOnInit();
    fixture.detectChanges();
    expect(loadTodosSpy).toHaveBeenCalled();
  });

  describe('loadTodos', () => {
    it('should call listTodos', () => {
      const listTodosSpy = spyOn(todoService, 'listTodos');
      component.loadTodos();
      expect(listTodosSpy).toHaveBeenCalled();
    });

    it('should populate todos', () => {
      component.loadTodos();
      expect(component.todos.length).toBe(2);
    });
  });
});
