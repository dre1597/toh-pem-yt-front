import { Component } from '@angular/core';
import { MenuItem } from './core/models/menu-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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
}
