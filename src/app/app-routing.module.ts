import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './core/page-not-found.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { TeamComponent } from './team/team.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
    { path: '', component: GameComponent},
    { path: 'team', component: TeamComponent},
    { path: 'sponsor', component: SponsorComponent},
    { path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
