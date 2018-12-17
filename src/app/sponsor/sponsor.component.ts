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
        this.store.pipe(select(fromSponsor.getQuarterTwoLeft)).subscribe(quarterTwoLeft => this.quarterTwoLeft = quarterTwoLeft);
        this.store.pipe(select(fromSponsor.getQuarterTwoRight)).subscribe(quarterTwoRight => this.quarterTwoRight = quarterTwoRight);
        this.store.pipe(select(fromSponsor.getQuarterThreeLeft)).subscribe(quarterThreeLeft => this.quarterThreeLeft = quarterThreeLeft);
        this.store.pipe(select(fromSponsor.getQuarterThreeRight)).subscribe(quarterThreeRight => this.quarterThreeRight = quarterThreeRight);
        this.store.pipe(select(fromSponsor.getQuarterFourLeft)).subscribe(quarterFourLeft => this.quarterFourLeft = quarterFourLeft);
        this.store.pipe(select(fromSponsor.getQuarterFourRight)).subscribe(quarterFourRight => this.quarterFourRight = quarterFourRight);
    }

    updateQuarterOneLeft(url: string): void {
        var img = url.split("\\").pop();
        this.store.dispatch(new sponsorActions.SetQuarterOneLeft(img));
    }
    updateQuarterOneRight(url: string): void {
        var img = url.split("\\").pop();
        this.store.dispatch(new sponsorActions.SetQuarterOneRight(img));
    }

    updateQuarterTwoLeft(url: string): void {
        var img = url.split("\\").pop();
        this.store.dispatch(new sponsorActions.SetQuarterTwoLeft(img));
    }
    updateQuarterTwoRight(url: string): void {
        var img = url.split("\\").pop();
        this.store.dispatch(new sponsorActions.SetQuarterTwoRight(img));
    }

    updateQuarterThreeLeft(url: string): void {
        var img = url.split("\\").pop();
        this.store.dispatch(new sponsorActions.SetQuarterThreeLeft(img));
    }
    updateQuarterThreeRight(url: string): void {
        var img = url.split("\\").pop();
        this.store.dispatch(new sponsorActions.SetQuarterThreeRight(img));
    }

    updateQuarterFourLeft(url: string): void {
        var img = url.split("\\").pop();
        this.store.dispatch(new sponsorActions.SetQuarterFourLeft(img));
    }
    updateQuarterFourRight(url: string): void {
        var img = url.split("\\").pop();
        this.store.dispatch(new sponsorActions.SetQuarterFourRight(img));
    }
}