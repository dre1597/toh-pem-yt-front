import { Location } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroService } from '../hero.service';
import { Hero } from '../hero.type';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  protected hero?: Hero;

  private readonly destroyRef = inject(DestroyRef);
  private readonly heroService = inject(HeroService);
  private readonly location = inject(Location);
  private readonly route = inject(ActivatedRoute);

  public ngOnInit(): void {
    this.getHero();
  }

  protected getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService
      .getHero(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (hero: Hero | undefined) => {
          this.hero = hero;
        },
      });
  }

  protected goBack(): void {
    this.location.back();
  }
}
