import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero.type';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  public getHeroes(): Hero[] {
    return HEROES;
  }
}
