import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterLink } from '@angular/router';
import { Role, User } from '../../model/LoginModel';
import { MasterService } from '../../service/master.service';

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
  constructor(
    private formBuilder: FormBuilder,
    private services: MasterService,
    private router: Router
  ) {}

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
    email: this.formBuilder.control(
      '',
      Validators.compose([Validators.email, Validators.required])
    ),
    password: this.formBuilder.control('', Validators.required),
    name: this.formBuilder.control('', Validators.required),
    role: this.formBuilder.control('', Validators.required),
    gender: this.formBuilder.control('', Validators.required),
    terms: this.formBuilder.control('', Validators.required),
  });

  ProceedWithRegister() {
    if (this.registerForm.valid && this.registerForm.value.terms) {
      console.log(this.registerForm.value);
      const _data: User = {
        id: this.registerForm.value.email as string,
        name: this.registerForm.value.name as string,
        password: this.registerForm.value.password as string,
        role: this.registerForm.value.role as string,
        gender: this.registerForm.value.gender as string,
      };

      this.services.ProceedWithRegister(_data).subscribe((item) => {
        alert('Registered Successfully.');
        this.router.navigateByUrl('/login');
      });
    }
  }
}
