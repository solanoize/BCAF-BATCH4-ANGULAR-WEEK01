import { Component } from '@angular/core';
import { IUser } from './cores/interfaces/i-user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users: IUser[] = [];
  loading: boolean = false;
}
