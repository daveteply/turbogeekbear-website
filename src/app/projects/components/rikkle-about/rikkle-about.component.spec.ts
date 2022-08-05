import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RikkleAboutComponent } from './rikkle-about.component';

describe('RikkleAboutComponent', () => {
  let component: RikkleAboutComponent;
  let fixture: ComponentFixture<RikkleAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RikkleAboutComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RikkleAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
