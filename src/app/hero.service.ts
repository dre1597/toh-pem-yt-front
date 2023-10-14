import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HEROES } from './mock-heroes';
import { Hero } from './hero.type';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  public getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
