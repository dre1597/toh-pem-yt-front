import { Component, inject } from '@angular/core';

import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loading',
  template: `
    <div *ngIf="this.loadingService.loading$ | async" class="loading-container">
      <mat-spinner></mat-spinner>
    </div>
  `,
  styles: [
    `
      .loading-container {
        background: (0, 0, 0, 0.5);
        position: fixed;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
        z-index: 3000;
      }
    `,
  ],
})
export class LoadingComponent {
  public loadingService = inject(LoadingService);
}
