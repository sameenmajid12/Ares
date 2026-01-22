import { computed, Injectable, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(email: string, password: string) {
    console.log(`Email: ${email}, Password: ${password}`);
  }
  register(email: string, password: string) {
    console.log(`Email: ${email}, Password: ${password}}`);
  }
}
