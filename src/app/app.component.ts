import { Component, inject } from '@angular/core';

import { MenuItem } from './core/models/menu-item.model';
import { AuthService } from './auth/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  protected isLoggedIn$: Observable<boolean>;
  protected title = 'Tour of Heroes';
  protected menuItems: MenuItem[] = [
    {
      icon: 'dashboard',
      tooltipText: 'Dashboard',
      routerLink: '/dashboard',
      ariaLabel: 'Navigate to dashboard',
    },
    {
      icon: 'sports_martial_arts',
      tooltipText: 'Heroes',
      routerLink: '/heroes',
      ariaLabel: 'Navigate to heroes list',
    },
  ];
  private readonly authService = inject(AuthService);

  constructor() {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
  }

  protected onLogout(): void {
    this.authService.logout();
  }
}
