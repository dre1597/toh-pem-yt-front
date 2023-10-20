import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { HeroesRoutingModule } from './heroes-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

@NgModule({
  declarations: [HeroesComponent, HeroDetailComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HeroesRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class HeroesModule {}
