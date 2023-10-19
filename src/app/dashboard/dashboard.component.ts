import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { HeroService } from '../core/services/hero.service';

import { Hero } from '../core/models/hero.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  protected heroes: Hero[] = [];

  private readonly destroyRef = inject(DestroyRef);
  private readonly heroService = inject(HeroService);

  public ngOnInit(): void {
    this.getHeroes();
  }

  protected getHeroes(): void {
    this.heroService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((heroes: Hero[]) => {
        this.heroes = heroes.slice(0, 5);
      });
  }
}
