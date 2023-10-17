import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { MaterialModule } from '../material/material.module';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MessagesComponent } from './components/messages/messages.component';

@NgModule({
  declarations: [MessagesComponent, ToolbarComponent],
  imports: [CommonModule, MaterialModule, RouterLink],
  exports: [MessagesComponent, ToolbarComponent],
})
export class CoreModule {}
