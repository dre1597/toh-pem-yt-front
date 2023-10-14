import { Component, inject, OnInit } from '@angular/core';

import { Hero } from '../hero.type';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  protected heroes: Hero[] = [];
  protected selectedHero?: Hero;
  private readonly heroService = inject(HeroService);

  public ngOnInit(): void {
    this.getHeroes();
  }

  protected onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  private getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
}
