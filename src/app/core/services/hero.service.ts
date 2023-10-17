import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HEROES } from './mock-heroes';
import { MessagesService } from './messages.service';
import { Hero } from '../models/hero.model';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private readonly messageService = inject(MessagesService);

  public getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  public getHero(id: number): Observable<Hero | undefined> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find((hero) => hero.id === id));
  }
}
