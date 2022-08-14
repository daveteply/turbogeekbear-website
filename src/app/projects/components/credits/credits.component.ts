import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Credits } from 'src/app/projects/credits';

@Component({
  selector: 'tur-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss'],
})
export class CreditsComponent implements OnInit {
  creditsData: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const title = this.route.snapshot.data['title'];

    this.creditsData = Credits.filter((c) =>
      c.usedBy?.some((u) => u === title)
    ).sort((a, b) => (a.order > b.order ? 1 : a.order));
  }
}
