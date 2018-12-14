import { Component } from "@angular/core";
import { Store, select } from '@ngrx/store';

import * as fromSponsor from '../sponsor/state/sponsor.reducer';
import * as fromTeam from '../team/state/team.reducer';
import * as fromGame from '../game/state/game.reducer';

@Component({
    selector: 'sb-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.css']
})

export class BannerComponent {
    // Sponsor Info
    leftAd = "";
    rightAd = "";
    // Team Info
    homeName = "";
    awayName = "";
    homeFont = "";
    awayFont = "";
    homeColor = "";
    awayColor = "";
    homeScore = 18;
    awayScore = 0;
    homeBall = true;
    awayBall = false;
    homeTimeouts = 2;
    awayTimeouts = 2;
    // Game Info
    gameClockPaused = true;
    gameClock = "15:00";
    playClockPaused = true;
    playClock = 40;
    quarter = 1;
    downs = 1;
    yards = 10;

    constructor(private store: Store<any>) {}
    
    ngOnInit(): void {
        this.store.pipe(select(fromTeam.getHomeName)).subscribe(homeName => this.homeName = homeName);
        this.store.pipe(select(fromTeam.getAwayName)).subscribe(awayName => this.awayName = awayName);
        this.store.pipe(select(fromTeam.getHomeFont)).subscribe(homeFont => this.homeFont = homeFont);
        this.store.pipe(select(fromTeam.getAwayFont)).subscribe(awayFont => this.awayFont = awayFont);
        this.store.pipe(select(fromTeam.getHomeColor)).subscribe(homeColor => this.homeColor = homeColor);
        this.store.pipe(select(fromTeam.getAwayColor)).subscribe(awayColor => this.awayColor = awayColor);
        
        this.store.pipe(select(fromGame.getLeftAd)).subscribe(leftAd => this.leftAd = leftAd);
        this.store.pipe(select(fromGame.getRightAd)).subscribe(rightAd => this.rightAd = rightAd);

        this.store.pipe(select(fromGame.getHomeScore)).subscribe(homeScore => this.homeScore = homeScore);
        this.store.pipe(select(fromGame.getHomeBall)).subscribe(homeBall => this.homeBall = homeBall);
        this.store.pipe(select(fromGame.getHomeTimeouts)).subscribe(homeTimeouts => this.homeTimeouts = homeTimeouts);
        this.store.pipe(select(fromGame.getAwayScore)).subscribe(awayScore => this.awayScore = awayScore);
        this.store.pipe(select(fromGame.getAwayBall)).subscribe(awayBall => this.awayBall = awayBall);
        this.store.pipe(select(fromGame.getAwayTimeouts)).subscribe(awayTimeouts => this.awayTimeouts = awayTimeouts);

        this.store.pipe(select(fromGame.getGameClockPaused)).subscribe(gameClockPaused => this.gameClockPaused = gameClockPaused);
        this.store.pipe(select(fromGame.getGameClock)).subscribe(gameClock => this.gameClock = gameClock);
        this.store.pipe(select(fromGame.getPlayClockPaused)).subscribe(playClockPaused => this.playClockPaused = playClockPaused);
        this.store.pipe(select(fromGame.getPlayClock)).subscribe(playClock => this.playClock = playClock);

        this.store.pipe(select(fromGame.getQuarter)).subscribe(quarter => this.quarter = quarter);
        this.store.pipe(select(fromGame.getDowns)).subscribe(downs => this.downs = downs);
        this.store.pipe(select(fromGame.getYards)).subscribe(yards => this.yards = yards);
    }
}