import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth-service/auth-service';
import { InputError } from '../../directives/input-error';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  imports: [RouterLink, InputError, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private formBuilder = inject(FormBuilder);
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*\d).{8,}$/)]],
  });
  emailControlError = this.loginForm.get('email')?.errors;
  get emailValid(){
    const control = this.loginForm.get('email');
    return !!(control?.invalid && control?.touched);
  }
  get passwordValid(){
    const control = this.loginForm.get('password');
    return !!(control?.invalid && control?.touched);
  }

  auth = inject(AuthService);
  onSubmit() {
    if (this.loginForm.invalid) return;
    this.auth.login(
      this.loginForm.get('email')?.value ?? '',
      this.loginForm.get('password')?.value ?? ''
    );
  }
}
