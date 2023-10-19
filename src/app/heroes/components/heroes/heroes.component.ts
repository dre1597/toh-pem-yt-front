import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';

import { HeroService } from '../../../core/services/hero.service';
import { Hero } from '../../../core/models/hero.model';
import { DialogData } from '../../../core/models/dialog-data.model';
import { ConfirmationDialogComponent } from '../../../core/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  public dialog = inject(MatDialog);
  protected columns = ['id', 'name', 'actions'];
  protected heroes: Hero[] = [];
  private readonly destroyRef = inject(DestroyRef);
  private readonly heroService = inject(HeroService);

  public ngOnInit(): void {
    this.getAll();
  }

  protected delete(hero: Hero, event: MouseEvent): void {
    event.stopPropagation();

    const dialogData: DialogData = {
      cancelText: 'Cancel',
      confirmText: 'Delete',
      message: `Are you sure you want to delete ${hero.name}?`,
    };

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.heroService
          .delete(hero.id)
          .pipe(takeUntilDestroyed(this.destroyRef))
          .subscribe({
            next: () => {
              this.getAll();
            },
          });
      }
    });
  }

  private getAll(): void {
    this.heroService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (heroes: Hero[]) => {
          this.heroes = heroes;
        },
      });
  }
}
