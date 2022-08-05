import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RikkleStoryComponent } from './rikkle-story.component';

describe('RikkleStoryComponent', () => {
  let component: RikkleStoryComponent;
  let fixture: ComponentFixture<RikkleStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RikkleStoryComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RikkleStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
