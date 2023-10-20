import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  Subject,
  switchMap,
} from 'rxjs';

import { Hero } from '../../../core/models/hero.model';
import { HeroService } from '../../../core/services/hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss'],
})
export class HeroSearchComponent implements OnInit {
  @Input() public label = '';
  protected heroes$!: Observable<Hero[]>;
  private searchTerm = new Subject<string>();
  @Output() private heroSelected = new EventEmitter<Hero>();

  private readonly heroService = inject(HeroService);

  public ngOnInit(): void {
    this.heroes$ = this.searchTerm.pipe(
      debounceTime(600),
      distinctUntilChanged(),
      switchMap((term) => this.heroService.getAll(term)),
    );
  }

  public search(term: string): void {
    this.searchTerm.next(term);
  }

  public onSelected($event: MatAutocompleteSelectedEvent): void {
    this.searchTerm.next('');

    const hero = $event.option.value;
    this.heroSelected.emit(hero);
  }
}
