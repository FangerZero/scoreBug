import { Component } from "@angular/core";
import { Store, select } from '@ngrx/store';

import * as fromSponsor from './state/sponsor.reducer';
import * as sponsorActions from './state/sponsor.actions';

@Component({
    selector: 'sb-sponsor',
    templateUrl: './sponsor.component.html'
})

export class SponsorComponent {
    title = 'ScoreBug Sponsor'
    
    quarterOneLeft = '';
    quarterOneRight = '';
    quarterTwoLeft = '';
    quarterTwoRight = '';
    quarterThreeLeft = '';
    quarterThreeRight = '';
    quarterFourLeft = '';
    quarterFourRight = '';

    constructor(private store: Store<fromSponsor.State>) {}
    
    ngOnInit(): void {
        this.store.pipe(select(fromSponsor.getQuarterOneLeft)).subscribe(quarterOneLeft => this.quarterOneLeft = quarterOneLeft);
        this.store.pipe(select(fromSponsor.getQuarterOneRight)).subscribe(quarterOneRight => this.quarterOneRight = quarterOneRight);
    }

    updateQuarterOneLeft(url: string): void {
        var img = '../../assets/images/sponsor/'+url.split("\\").pop();
        this.store.dispatch(new sponsorActions.SetQuarterOneLeft(img));
    }

    updateQuarterOneRight(url: string): void {
        var img = '../../assets/images/sponsor/'+url.split("\\").pop();
        this.store.dispatch(new sponsorActions.SetQuarterOneRight(img));
    }
}