import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { ReversePipe } from './custom/reverse.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatCardModule,
    HomeComponent,
    CommonModule,
    ReversePipe,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular 19 re-freshner';
  subtitle = 'general concepts';
  todaysDate = new Date();
  salary = 100000;
  _obj = { name: 'NT' };
  isDisabled = true;

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
