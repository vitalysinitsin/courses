import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ReversePipe } from '../custom/reverse.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [MatCardModule, CommonModule, ReversePipe, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = 'Angular 19 re-freshner';
  subtitle = 'general concepts';
  todaysDate = new Date();
  salary = 100000;
  _obj = { name: 'NT' };
  isDisabled = true;
  _class = 'active';
  _color = 'cyan';
  _font = '24';
  show = true;
  ticketInfo = [
    { id: 1, name: 'angular', color: 'red' },
    { id: 2, name: 'vue', color: 'green' },
    { id: 3, name: 'react', color: 'blue' },
  ];
  _view = 'hehe';

  ChangeTitle() {
    this.title = 'Angular 19 updated title';
  }

  UpdateTitle(event: Event) {
    if (event.currentTarget instanceof EventTarget) {
      const input = event.currentTarget as HTMLInputElement;
      this.title = input.value;
    }
  }
}
