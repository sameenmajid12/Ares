import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  email = signal<string>('');
  password = signal<string>('');
  retypedPassword = signal<string>('');
  private emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  private passwordRegex = /^(?=.*\d).{8,}$/;
  isEmailValid = computed(() => this.emailRegex.test(this.email()));
  isPasswordValid = computed(() => this.passwordRegex.test(this.password()));
  isPasswordMatch = computed(() => this.password() === this.retypedPassword());
  touched = signal<boolean>(false);
  validateForm(type: 'login' | 'register'): boolean {
    if (type === 'login') {
      return this.isEmailValid() && this.isPasswordValid();
    }
    return this.isEmailValid() && this.isPasswordValid() && this.isPasswordMatch();
  }
  login() {
    const isValid = this.validateForm('login');
    console.log(`Email: ${this.email()}, Password: ${this.password()}, Valid: ${isValid}`);
    this.touched.set(true);
  }
  register() {
    const isValid = this.validateForm('register');
    console.log(
      `Email: ${this.email()}, Password: ${this.password()}, Retyped password: ${this.retypedPassword()}, Valid: ${isValid}`
    );
    this.touched.set(true);
  }
}
