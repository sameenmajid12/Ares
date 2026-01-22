import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth-service/auth-service';
import { InputError } from '../../directives/input-error';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../../validators/password-match.validator';
@Component({
  selector: 'app-signup',
  imports: [RouterLink, InputError, ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css', '../../styles/auth-form.styles.css'],
})
export class Signup {
  formBuilder = inject(FormBuilder);
  signupForm = this.formBuilder.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*\d).{8,}$/)]],
      retypedPassword: ['', [Validators.required]],
    },
    {
      validators: passwordMatchValidator,
    }
  );
  get emailValid() {
    const control = this.signupForm.get('email');
    return !!(control?.invalid && control?.touched);
  }
  get passwordValid() {
    const control = this.signupForm.get('password');
    return !!(control?.invalid && control?.touched);
  }
  get retypedPasswordValid() {
    const control = this.signupForm.get('retypedPassword');
    return !!(control?.touched && (this.signupForm.errors?.['passwordMismatch'] || this.signupForm.get('retypedPassword')?.errors?.['required']));
  }
  auth = inject(AuthService);
  onSubmit() {
    if (this.signupForm.invalid) return;
    this.auth.register(
      this.signupForm.get('email')?.value ?? '',
      this.signupForm.get('password')?.value ?? ''
    );
  }
}
