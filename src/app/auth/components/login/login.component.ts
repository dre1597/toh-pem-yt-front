import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  private readonly formBuilder = inject(FormBuilder);
  form = this.formBuilder.group({
    email: [
      { value: 'tour@f.heroes', disabled: true },
      [Validators.email, Validators.required],
    ],
    password: ['', [Validators.required, Validators.minLength(10)]],
  });
  private readonly authService = inject(AuthService);

  get email(): string | null | undefined {
    return this.form.get('email')?.value;
  }

  get password(): string | null | undefined {
    return this.form.get('password')?.value;
  }

  onSubmit(): void {
    if (this.form.valid) {
      if (this.email && this.password) {
        this.authService.login({
          email: this.email,
          password: this.password,
        });
      }
    }
  }
}
