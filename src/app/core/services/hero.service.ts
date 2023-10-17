import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Hero } from '../models/hero.model';

import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = '/api/heroes';

  private readonly messageService = inject(MessagesService);
  private readonly httpClient = inject(HttpClient);

  public getHeroes(): Observable<Hero[]> {
    return this.httpClient
      .get<Hero[]>(this.heroesUrl)
      .pipe(tap(() => this.log('fetched heroes')));
  }

  public getHero(id: number): Observable<Hero | undefined> {
    return this.httpClient
      .get<Hero>(`${this.heroesUrl}/${id}`)
      .pipe(tap(() => this.log(`fetched hero id=${id}`)));
  }

  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`);
  }
}
