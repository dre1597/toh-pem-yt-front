import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { authGuard } from '../auth/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HeroesComponent,
    canActivate: [authGuard],
  },
  {
    path: ':id',
    component: HeroDetailComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
