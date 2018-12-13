import { Component } from "@angular/core";
import { Store, select } from '@ngrx/store';

import * as fromSponsor from '../sponsor/state/sponsor.reducer';
import * as fromTeam from '../team/state/team.reducer';

@Component({
    selector: 'sb-banner',
    templateUrl: './banner.component.html'
})

export class BannerComponent {
    leftAd = "";
    rightAd = "";
    homeTeam = "";
    awayTeam = "";

    constructor(private store: Store<fromSponsor.State>) {}
    
    ngOnInit(): void {
        this.store.pipe(select(fromSponsor.getQuarterOneLeft)).subscribe(quarterOneLeft => this.leftAd = quarterOneLeft);
        this.store.pipe(select(fromSponsor.getQuarterOneRight)).subscribe(quarterOneRight => this.rightAd = quarterOneRight);
        this.store.pipe(select(fromTeam.getHomeName)).subscribe(homeTeam => this.homeTeam = homeTeam);
        this.store.pipe(select(fromTeam.getAwayName)).subscribe(awayTeam => this.awayTeam = awayTeam);
    }
}