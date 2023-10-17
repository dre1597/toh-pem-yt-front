import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { MaterialModule } from '../material/material.module';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MessagesComponent } from './components/messages/messages.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

@NgModule({
  declarations: [MessagesComponent, ToolbarComponent, NotFoundPageComponent],
  imports: [CommonModule, MaterialModule, RouterLink],
  exports: [MessagesComponent, ToolbarComponent],
})
export class CoreModule {}
