import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../models/dialog-data.model';

@Component({
  selector: 'app-confirmation-dialog',
  template: ` <mat-dialog-content>
      <p class="mat-body-1">{{ data.message }}</p>
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-button [mat-dialog-close]="false">
        {{ data.cancelText }}
      </button>

      <button mat-button [mat-dialog-close]="true">
        {{ data.confirmText }}
      </button>
    </mat-dialog-actions>`,
})
export class ConfirmationDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
