import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'todo-container',
  imports: [FormsModule],
  templateUrl: './todo-container.component.html',
  styleUrl: './todo-container.component.css',
})
export class TodoContainerComponent {
  todos: any[] = [];
  newTodoText: string = '';

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    // listen for an api response and then update todos accordingly
    this.todoService.getAllTodos().subscribe((data) => {
      this.todos = data;
    });
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.createTodo();
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    });
  }

  createTodo() {
    this.todoService.createTodo(this.newTodoText).subscribe((newTodo: any) => {
      const created = { text: this.newTodoText, id: newTodo.id };
      this.todos.push(created);
      this.newTodoText = '';
    });
  }
}
