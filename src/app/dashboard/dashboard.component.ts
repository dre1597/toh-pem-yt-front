import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Hero } from '../hero.type';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
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
      .getHeroes()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((heroes: Hero[]) => {
        this.heroes = heroes.slice(0, 5);
      });
  }
}
