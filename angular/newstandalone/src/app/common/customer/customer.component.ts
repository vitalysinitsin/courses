import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-customer',
  imports: [RouterOutlet, MatButtonModule, RouterLink, FormsModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
})
export class CustomerComponent {
  userInput = '';
  canNavigate() {
    if (this.userInput !== '') {
      if (
        confirm(
          "if you're going to navigate away, you're data will be lost. Are you sure?"
        )
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }
}
