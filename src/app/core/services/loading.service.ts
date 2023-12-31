import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  public hide(): void {
    this.loadingSubject.next(false);
  }

  public show(): void {
    this.loadingSubject.next(true);
  }
}
