import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';

interface Role {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    RouterLink,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor() {}

  roles: Role[] = [
    {
      value: 'admin',
      viewValue: 'Admin',
    },
    {
      value: 'user',
      viewValue: 'User',
    },
    {
      value: 'guest',
      viewValue: 'Guest',
    },
  ];

  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    name: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(5)])
    ),
    email: new FormControl(
      '',
      Validators.compose([Validators.email, Validators.required])
    ),
    role: new FormControl('', Validators.required),
  });
  ProceedWithRegister() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    }
  }
}
