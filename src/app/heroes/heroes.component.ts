import { Component } from '@angular/core';
import { Hero } from '../hero.type';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  protected hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };
}
