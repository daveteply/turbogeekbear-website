import { Component, OnInit } from '@angular/core';
import { Credits } from './credits';

@Component({
  selector: 'tur-rikkle-about',
  templateUrl: './rikkle-about.component.html',
  styleUrls: ['./rikkle-about.component.scss'],
})
export class RikkleAboutComponent implements OnInit {
  creditsData: any;

  constructor() {}

  ngOnInit(): void {
    this.creditsData = Credits.sort((a, b) =>
      a.order > b.order ? 1 : a.order
    );
  }
}
