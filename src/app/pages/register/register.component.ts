import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    email: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    password: ['', [Validators.required]]
  })

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  register() {
    if (this.registerForm.valid) {
      const name = this.registerForm.value['name'] ?? '';
      const email = this.registerForm.value['email'] ?? '';
      const password = this.registerForm.value['password'] ?? '';
      this.authService.register(name, email, password).subscribe();
    }
  }
}
