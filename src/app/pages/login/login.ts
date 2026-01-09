import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth-service/auth-service';
import { InputError } from '../../directives/input-error';
@Component({
  selector: 'app-login',
  imports: [RouterLink, InputError],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  auth = inject(AuthService)
}
