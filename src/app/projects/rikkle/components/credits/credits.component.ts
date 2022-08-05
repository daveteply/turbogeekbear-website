import { Component, OnInit } from '@angular/core';
import { Credits } from './credits';

@Component({
  selector: 'tur-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss'],
})
export class CreditsComponent implements OnInit {
  creditsData: any;

  constructor() {}

  ngOnInit(): void {
    this.creditsData = Credits.sort((a, b) =>
      a.order > b.order ? 1 : a.order
    );
  }
}
