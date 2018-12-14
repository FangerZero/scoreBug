import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

// For Development Tools
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './core/page-not-found.component';
import { MenuComponent } from './core/menu.component';
import { GameComponent } from './game/game.component';
import { TeamComponent } from './team/team.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { BannerComponent } from './banner/banner.component';
import { sponsorReducer } from './sponsor/state/sponsor.reducer';
import { teamReducer } from './team/state/team.reducer';
import { gameReducer } from './game/state/game.reducer';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MenuComponent,
    GameComponent,
    TeamComponent,
    SponsorComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'ScoreBug Demo Dev Tools',
      maxAge: 25,
      logOnly: environment.production
    }),
    StoreModule.forFeature('sponsor',sponsorReducer),
    StoreModule.forFeature('team',teamReducer),
    StoreModule.forFeature('game',gameReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
