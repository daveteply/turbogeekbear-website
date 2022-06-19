import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RikklePrivacyComponent } from './rikkle-privacy.component';

describe('RikklePrivacyComponent', () => {
  let component: RikklePrivacyComponent;
  let fixture: ComponentFixture<RikklePrivacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RikklePrivacyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RikklePrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
