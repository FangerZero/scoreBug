import { Component } from "@angular/core";
import { Store, select } from '@ngrx/store';

import * as fromGame from '../game/state/game.reducer';
import * as gameActions from './state/game.actions';
import * as fromSponsor from '../sponsor/state/sponsor.reducer';

@Component({
    selector: 'sb-game',
    templateUrl: './game.component.html'
})

export class GameComponent {
    title = 'ScoreBug Game';
    x;
    y;
    // Sponsor Info
    leftAd = "";
    rightAd = "";
    // Team Info
    homeScore = 0;
    awayScore = 0;
    homeBall = true;
    awayBall = false;
    homeTimeouts = 3;
    awayTimeouts = 3;
    // Game Info
    gameClockPaused = true;
    gameClock = "15:00";
    playClockPaused = true;
    playClock = 40;
    quarter = 1;
    downs = 1;
    yards = 10;
    
    constructor(private store: Store<fromGame.State>) {}
    
    ngOnInit(): void {
        this.store.pipe(select(fromSponsor.getQuarterOneLeft)).subscribe(quarterOneLeft => this.leftAd = quarterOneLeft);
        this.store.pipe(select(fromSponsor.getQuarterOneRight)).subscribe(quarterOneRight => this.rightAd = quarterOneRight);

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
        
        this.updateSponsors(this.quarter);
    }

    //******************** */
    // Game Ball Information
    updateBall(team: string): void {
        this.store.dispatch(new gameActions.SetHomeBall(!this.homeBall));
        this.store.dispatch(new gameActions.SetAwayBall(!this.awayBall));
        this.resetDownsYards();
    }
    
    //******************** */
    // Game Clock Information
    pauseGameClock(): void {
        this.store.dispatch(new gameActions.SetGameClockPaused(!this.gameClockPaused));
        if(!this.gameClockPaused) {
            this.getTotalSeconds()
        } else {
            clearInterval(this.x);
        }
    }
    updateGameClock(gameClock: string): void {
        this.store.dispatch(new gameActions.SetGameClock(gameClock));
    }
    getTotalSeconds(): void {
        var tmpTime = "";
        var currentClock = this.gameClock;
        var timerRay = currentClock.split(":");
        var minutes = parseInt(timerRay[0],10)*60000;
        var seconds = parseInt(timerRay[1],10)*1000;
        var startTime = new Date().getTime();
        var endTime = startTime+(minutes+seconds);
        var test = this.store; 
        
        this.x = setInterval(function() {
            var secondsDisplay = "00";
            var now = new Date().getTime();
            var timeLeft = endTime - now;
            minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
			seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
			
            if(seconds < 10) {
                secondsDisplay = "0"+seconds.toString();
            } else {
                secondsDisplay = seconds.toString()
            }

            if (timeLeft <= 0) {
                clearInterval(this.x);
                tmpTime = "0:00";
                
            } else {
                tmpTime = minutes.toString() + ":" + secondsDisplay;
            }

            test.dispatch(new gameActions.SetGameClock(tmpTime));
        }, 1000);

    }

    //******************** */
    // Play Clock Information
    resetPlayClock(): void {
        this.store.dispatch(new gameActions.SetPlayClock(40));
        this.store.dispatch(new gameActions.SetPlayClockPaused(true));
        clearInterval(this.y);
    }
    pausePlayClock(): void {
        this.store.dispatch(new gameActions.SetPlayClockPaused(!this.playClockPaused));
        if(!this.playClockPaused) {
            this.getPlayClockSeconds()
        } else {
            clearInterval(this.y);
        }
    }
    getPlayClockSeconds(): void {
        var tmpTime = 0;
        var currentClock = this.playClock;
        var seconds = currentClock*1000;
        var startTime = new Date().getTime();
        var endTime = startTime+(seconds);
        var test = this.store; 
        
        this.y = setInterval(function() {
            var now = new Date().getTime();
            var timeLeft = endTime - now;
			seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
			
            if (timeLeft <= 0) {
                clearInterval(this.y);
                tmpTime = 0;
                
            } else {
                tmpTime = seconds;
            }
            
            test.dispatch(new gameActions.SetPlayClock(tmpTime));
        }, 1000);

    }

    //******************** */
    // Quarter Information
    updateQuarter(quarter: number): void {
        if ((this.quarter === 1 && quarter === 1) ||
            (this.quarter === 4 && quarter === -1) || 
            (this.quarter > 1 && this.quarter < 4)) {
                this.store.dispatch(new gameActions.SetQuarter(this.quarter+quarter));
                this.store.dispatch(new gameActions.SetGameClock("15:00"));
                this.store.dispatch(new gameActions.SetGameClockPaused(true));
                if(this.quarter === 3) {
                    this.store.dispatch(new gameActions.SetHomeTimeouts(3));
                    this.store.dispatch(new gameActions.SetAwayTimeouts(3));
                    this.resetDownsYards();
                }
                this.updateSponsors(this.quarter);
        }
    }

    //******************** */
    // Downs & Yards Information
    resetDownsYards(): void {
        this.store.dispatch(new gameActions.SetDowns(1));
        this.store.dispatch(new gameActions.SetYards(10));
    }
    updateDowns(downs: number): void {
        if ((this.downs === 1 && downs === 1) ||
            (this.downs === 4 && downs === -1) || 
            (this.downs > 1 && this.downs < 4)) {
                //this.downs+=downs;
                this.store.dispatch(new gameActions.SetDowns(this.downs+downs));
        }
    }
    updateYards(yards: number): void {
        this.store.dispatch(new gameActions.SetYards(yards*1));
    }
    addYards(yards: number): void {
        if (this.yards > 0 || yards > 0) {
            this.yards+=yards;
            if (this.yards < 0) {
                this.yards = 0;
            }
        }
        this.store.dispatch(new gameActions.SetYards(this.yards));
    }

    //*********************/
    //  Score Information
    updateHomeScore(score: number): void {
        if (this.homeScore > 0 || score > 0) {
            this.homeScore+=score;
            if (this.homeScore < 0) {
                this.homeScore = 0;
            }
        }
        this.store.dispatch(new gameActions.SetHomeScore(this.homeScore));
    }
    updateAwayScore(score: number): void {
        if (this.awayScore > 0 || score > 0) {
            this.awayScore+=score;
            if (this.awayScore < 0) {
                this.awayScore = 0;
            }
        }
        this.store.dispatch(new gameActions.SetAwayScore(this.awayScore));
    }

    //*********************/
    //  Timeouts Information
    updateHomeTimeouts(timeout: number): void {
        if ((this.homeTimeouts === 0 && timeout === 1) ||
            (this.homeTimeouts === 3 && timeout === -1) || 
            (this.homeTimeouts > 0 && this.homeTimeouts < 3)) {
                //this.homeTimeouts+=timeout;
                this.store.dispatch(new gameActions.SetHomeTimeouts(this.homeTimeouts+timeout));
        }
    }
    updateAwayTimeouts(timeout: number): void {
        if ((this.awayTimeouts === 0 && timeout === 1) ||
            (this.awayTimeouts === 3 && timeout === -1) || 
            (this.awayTimeouts > 0 && this.awayTimeouts < 3)) {
                //this.awayTimeouts+=timeout;
                this.store.dispatch(new gameActions.SetAwayTimeouts(this.awayTimeouts+timeout));
        }
    }

    //*********************/
    //  Sponsor Information
    updateSponsors(quarter: number): void {
        switch(quarter) {
            case 1:
                this.store.pipe(select(fromSponsor.getQuarterOneLeft)).subscribe(quarterOneLeft => this.leftAd = quarterOneLeft);
                this.store.pipe(select(fromSponsor.getQuarterOneRight)).subscribe(quarterOneRight => this.rightAd = quarterOneRight);
            break;
            case 2:
                this.store.pipe(select(fromSponsor.getQuarterTwoLeft)).subscribe(quarterTwoLeft => this.leftAd = quarterTwoLeft);
                this.store.pipe(select(fromSponsor.getQuarterTwoRight)).subscribe(quarterTwoRight => this.rightAd = quarterTwoRight);
            break;
            case 3:
                this.store.pipe(select(fromSponsor.getQuarterThreeLeft)).subscribe(quarterThreeLeft => this.leftAd = quarterThreeLeft);
                this.store.pipe(select(fromSponsor.getQuarterThreeRight)).subscribe(quarterThreeRight => this.rightAd = quarterThreeRight);
            break;
            case 4:
                this.store.pipe(select(fromSponsor.getQuarterFourLeft)).subscribe(quarterFourLeft => this.leftAd = quarterFourLeft);
                this.store.pipe(select(fromSponsor.getQuarterFourRight)).subscribe(quarterFourRight => this.rightAd = quarterFourRight);
            break;
        } 
        this.store.dispatch(new gameActions.SetLeftAd(this.leftAd));
        this.store.dispatch(new gameActions.SetRightAd(this.rightAd));
    }
}