import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { HeroService } from '../../../core/services/hero.service';
import { Hero } from '../../../core/models/hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  protected columns = ['id', 'name'];
  protected heroes: Hero[] = [];

  private readonly destroyRef = inject(DestroyRef);
  private readonly heroService = inject(HeroService);

  public ngOnInit(): void {
    this.getHeroes();
  }

  private getHeroes(): void {
    this.heroService
      .getHeroes()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (heroes: Hero[]) => {
          this.heroes = heroes;
          console.log('get heroes', heroes);
        },
      });
  }
}
