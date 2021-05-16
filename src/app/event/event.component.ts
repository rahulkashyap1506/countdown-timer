import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  screenHeight!: number;
  screenWidth!: number;
  finalTime!: number;
  currentTime: number = new Date().getTime();
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  milliseconds: number = 0;
  subscription!: Subscription;
  interval: number = 1000;
  message: string = "Birthday party starts in";
  imgStyle!: object;
  pageStyle!: object;
  messageStyle!: object;
  digitStyle!: object;
  wordStyle!: object;

  constructor() { }

  ngOnInit(): void {
    this.finalTime = new Date('2021-06-14T18:30:00Z').getTime();

    this.update();
    const source = interval(this.interval);
    this.subscription = source.subscribe(() => this.update());
  }

  update() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    
    this.imgStyle = {
      'background-image': 'url(../../assets/images/Birthday.jpg)',
      'height': this.screenHeight + 'px',
      'background-position': 'center',
      'background-repeat': 'no-repeat',
      'background-attachment': 'fixed',
      'background-size': '100% 100%'
    }

    this.pageStyle = {
      'color': 'white'
    }

    this.messageStyle = {
      'padding-top': (this.screenHeight * 0.2) + 'px',
      'margin-right': (this.screenWidth * 0.20) + 'px',
      'margin-left': (this.screenWidth * 0.20) + 'px',
      'font-size': (this.screenHeight * 0.1) + 'px'
    };
    
    this.digitStyle = {
      'font-size': (this.screenHeight * 0.20) + 'px'
    };
    
    this.wordStyle = {
      'font-size': (this.screenHeight * 0.07) + 'px'
    };

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