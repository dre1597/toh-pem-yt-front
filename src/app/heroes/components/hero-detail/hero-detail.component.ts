import { Location } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { Hero } from '../../../core/models/hero.model';
import { HeroService } from '../../../core/services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  protected hero: Hero = this.initializeEmptyHero();
  protected isEditing = false;

  private readonly destroyRef = inject(DestroyRef);
  private readonly heroService = inject(HeroService);
  private readonly location = inject(Location);
  private readonly route = inject(ActivatedRoute);

  public ngOnInit(): void {
    this.getHero();
  }

  protected getHero(): void {
    const paramId = this.route.snapshot.paramMap.get('id');

    if (paramId === 'new') {
      this.isEditing = false;
      this.hero = this.initializeEmptyHero();
      return;
    }

    this.isEditing = true;
    const id = Number(paramId);
    this.heroService
      .getOne(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (hero: Hero | undefined) => {
          if (hero) {
            this.hero = hero;
          } else {
            this.hero = this.initializeEmptyHero();
          }
        },
      });
  }

  protected goBack(): void {
    this.location.back();
  }

  protected isFormValid(): boolean {
    return !!this.hero?.name?.trim();
  }

  protected save(): void {
    if (!this.isFormValid()) {
      return;
    }

    if (this.isEditing) {
      this.update();
      return;
    }

    this.create();
  }

  private create(): void {
    this.heroService
      .add(this.hero)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          this.goBack();
        },
      });
  }

  private update(): void {
    this.heroService
      .update(this.hero)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          this.goBack();
        },
      });
  }

  private initializeEmptyHero(): Hero {
    return { name: '' } as Hero;
  }
}
