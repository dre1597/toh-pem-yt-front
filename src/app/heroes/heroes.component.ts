import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { Hero } from '../hero.type';
import { HeroService } from '../hero.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  protected heroes: Hero[] = [];
  protected selectedHero?: Hero;
  private readonly destroyRef = inject(DestroyRef);
  private readonly heroService = inject(HeroService);
  private readonly messagesService = inject(MessagesService);

  public ngOnInit(): void {
    this.getHeroes();
  }

  protected onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messagesService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  private getHeroes(): void {
    this.heroService
      .getHeroes()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (heroes: Hero[]) => {
          this.heroes = heroes;
        },
      });
  }
}
