import { inject, Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

import { MessagesService } from '../services/messages.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  private readonly messageService = inject(MessagesService);

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        let errorMsg = '';

        if (err.error instanceof ErrorEvent) {
          errorMsg = `An error occurred: ${err.error.message}`;
        } else {
          errorMsg = `Status code ${err.status}, message: ${err.message}`;
        }

        this.messageService.add(errorMsg);
        return throwError(() => new Error(errorMsg));
      }),
    );
  }
}
