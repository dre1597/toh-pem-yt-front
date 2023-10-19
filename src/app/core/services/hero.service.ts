import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { Hero } from '../models/hero.model';
import { MessagesService } from './messages.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = `${environment.apiUrL}/api/heroes`;

  private readonly messageService = inject(MessagesService);
  private readonly httpClient = inject(HttpClient);

  public getAll(): Observable<Hero[]> {
    return this.httpClient
      .get<Hero[]>(this.heroesUrl)
      .pipe(tap(() => this.log('fetched heroes')));
  }

  public getOne(id: number): Observable<Hero | undefined> {
    return this.httpClient
      .get<Hero>(`${this.heroesUrl}/${id}`)
      .pipe(tap(() => this.log(`fetched hero id=${id}`)));
  }

  public add(hero: Hero): Observable<Hero> {
    return this.httpClient
      .post<Hero>(this.heroesUrl, hero)
      .pipe(tap(() => this.log(`added hero w/ id=${hero.id}`)));
  }

  public update(hero: Hero): Observable<Hero> {
    return this.httpClient
      .put<Hero>(`${this.heroesUrl}/${hero.id}`, hero)
      .pipe(tap(() => this.log(`updated hero id=${hero.id}`)));
  }

  public delete(id: number): Observable<void> {
    return this.httpClient
      .delete<void>(`${this.heroesUrl}/${id}`)
      .pipe(tap(() => this.log(`deleted hero id=${id}`)));
  }

  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`);
  }
}
