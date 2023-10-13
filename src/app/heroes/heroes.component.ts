import { Component } from '@angular/core';
import { Hero } from '../hero.type';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  protected heroes = HEROES;
  protected selectedHero?: Hero;

  protected hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };

  protected onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
