import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoContainerComponent } from './components/todo-container/todo-container.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppComponent {
  title = 'client';
}
