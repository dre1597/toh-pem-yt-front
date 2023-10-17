import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
})
export class DashboardModule {}
