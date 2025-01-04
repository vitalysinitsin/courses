import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { Role } from '../../model/LoginModel';

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
  constructor(private formBuilder: FormBuilder) {}

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

  registerForm = this.formBuilder.group({
    username: this.formBuilder.control('', Validators.required),
    name: this.formBuilder.control(
      '',
      Validators.compose([Validators.required, Validators.minLength(5)])
    ),
    email: this.formBuilder.control(
      '',
      Validators.compose([Validators.email, Validators.required])
    ),
    role: this.formBuilder.control('', Validators.required),
    gender: this.formBuilder.control('', Validators.required),
    terms: this.formBuilder.control('', Validators.required),
  });

  ProceedWithRegister() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    }
  }
}
