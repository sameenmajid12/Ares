import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth-service/auth-service';
import { InputError } from '../../directives/input-error';

@Component({
  selector: 'app-signup',
  imports: [RouterLink, InputError],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  auth = inject(AuthService);
}
