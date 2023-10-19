import { Location } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
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
  protected isEditing = false;

  private readonly destroyRef = inject(DestroyRef);
  private readonly heroService = inject(HeroService);
  private readonly location = inject(Location);
  private readonly route = inject(ActivatedRoute);
  private readonly formBuilder = inject(FormBuilder);

  protected form = this.formBuilder.group({
    id: new FormControl<number | undefined>({
      value: undefined,
      disabled: true,
    }),
    name: new FormControl<string | undefined>(undefined, [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  public ngOnInit(): void {
    this.getHero();
  }

  protected getHero(): void {
    const paramId = this.route.snapshot.paramMap.get('id');

    if (paramId !== 'new') {
      this.isEditing = true;
      const id = Number(paramId);

      this.heroService
        .getOne(id)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe({
          next: (hero: Hero | undefined) => {
            if (hero) {
              this.form.controls['id'].setValue(hero.id);
              this.form.controls['name'].setValue(hero.name);
            }
          },
        });
    }
  }

  protected goBack(): void {
    this.location.back();
  }

  protected save(): void {
    const { valid, value } = this.form;

    if (!valid || !value.name) {
      return;
    }

    if (this.isEditing) {
      if (!this.form.controls['id'].value) {
        return;
      }

      this.update(this.form.controls['id'].value, value.name);
      return;
    }

    this.create(value.name);
  }

  private create(name: string): void {
    this.heroService
      .add({ name } as Hero)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          this.goBack();
        },
      });
  }

  private update(id: number, name: string): void {
    this.heroService
      .update({ id, name })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          this.goBack();
        },
      });
  }
}
