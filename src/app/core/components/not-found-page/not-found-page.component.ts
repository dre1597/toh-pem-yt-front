import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found-page',
  template: `
    <mat-card>
      <mat-card-title>404: Page not found</mat-card-title>
      <mat-card-content>
        We couldn't find that page! Not even with x-ray vision.
      </mat-card-content>
      <mat-card-actions>
        <button mat-raised-button color="primary" routerLink="/">
          Take me home
        </button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [
    `
      :host {
        text-align: center;
      }

      mat-card {
        padding: 20px;
      }

      mat-card-actions {
        & button {
          margin: 20px auto 0;
        }
      }
    `,
  ],
})
export class NotFoundPageComponent {}
