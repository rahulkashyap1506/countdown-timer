import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  finalTime!: number;
  currentTime: number = new Date().getTime();
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  milliseconds: number = 0;
  subscription!: Subscription;
  interval: number = 180;
  
  ngOnInit() {
    this.finalTime = new Date('2021-06-14T18:30:00Z').getTime();
    // this.finalTime = this.currentTime + 7200000

    this.update();
    const source = interval(this.interval);
    this.subscription = source.subscribe(() => this.update());
  }

  update() {
    this.currentTime = new Date().getTime();
    let difference: number = Math.abs(this.finalTime - this.currentTime);
    this.milliseconds = Math.trunc((difference % 1000) / 100);
    difference = Math.trunc(difference / 1000);
    this.seconds = difference % 60;
    difference = Math.trunc(difference / 60);
    this.minutes = difference % 60;
    difference = Math.trunc(difference / 60);
    this.hours = difference % 24;
    difference = Math.trunc(difference / 24);
    this.days = difference;
  }
}
