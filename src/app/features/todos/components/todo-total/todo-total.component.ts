import { Component, Input } from '@angular/core';
import { ITodo } from '../../interfaces/i-todo';

@Component({
  selector: 'app-todo-total',
  templateUrl: './todo-total.component.html',
  styleUrl: './todo-total.component.css',
})
export class TodoTotalComponent {
  @Input() todos!: ITodo[];
}
