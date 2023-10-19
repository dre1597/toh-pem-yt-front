import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { MaterialModule } from '../material/material.module';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MessagesComponent } from './components/messages/messages.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { LoadingComponent } from './components/loading/loading.component';

import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';

@NgModule({
  declarations: [
    MessagesComponent,
    ToolbarComponent,
    NotFoundPageComponent,
    LoadingComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
  ],
  imports: [CommonModule, MaterialModule, RouterLink],
  exports: [MessagesComponent, ToolbarComponent, LoadingComponent],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only',
      );
    }
  }
}
