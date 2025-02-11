import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getAllTodos = () => this.http.get<any[]>('/api/todo');
  getTodoById = (id: number) => this.http.get<any>(`/api/todo/${id}`);
  deleteTodo = (id: number) => this.http.delete<any>(`/api/todo/${id}`);
  createTodo = (text: string) => {
    const payload = { text, ts: Date.now() };
    return this.http.post<any>(`/api/todo`, payload);
  };
}
