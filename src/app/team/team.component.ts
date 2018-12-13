import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromTeam from '../team/state/team.reducer';
import * as teamActions from './state/team.actions';

@Component({
    selector: 'sb-team',
    templateUrl: './team.component.html'
})

export class TeamComponent {
    homeName = '';
    homeFont = '';
    homeColor = '';
    awayName = '';
    awayFont = '';
    awayColor = '';


    constructor(private store: Store<fromTeam.State>) {}
    
    ngOnInit(): void {
        this.store.pipe(select(fromTeam.getHomeName)).subscribe(homeName => this.homeName = homeName);
        this.store.pipe(select(fromTeam.getHomeFont)).subscribe(homeFont => this.homeFont = homeFont);
        this.store.pipe(select(fromTeam.getHomeColor)).subscribe(homeColor => this.homeColor = homeColor);
        this.store.pipe(select(fromTeam.getAwayName)).subscribe(awayName => this.awayName = awayName);
        this.store.pipe(select(fromTeam.getAwayFont)).subscribe(awayFont => this.awayFont = awayFont);
        this.store.pipe(select(fromTeam.getAwayColor)).subscribe(awayColor => this.awayColor = awayColor);

    }
    updateHomeName(name: string): void {
        this.store.dispatch(new teamActions.SetHomeName(name));
    }
    updateHomeFont(color: string): void {
        this.store.dispatch(new teamActions.SetHomeFont(color));
    }
    updateHomeColor(color: string): void {
        this.store.dispatch(new teamActions.SetHomeColor(color));
    }
    updateAwayName(name: string): void {
        this.store.dispatch(new teamActions.SetAwayName(name));
    }
    updateAwayFont(color: string): void {
        this.store.dispatch(new teamActions.SetAwayFont(color));
    }
    updateAwayColor(color: string): void {
        this.store.dispatch(new teamActions.SetAwayColor(color));
    }
}