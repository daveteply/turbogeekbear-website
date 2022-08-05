import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RikkleContainerComponent } from './rikkle-container.component';

describe('RikkleContainerComponent', () => {
  let component: RikkleContainerComponent;
  let fixture: ComponentFixture<RikkleContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RikkleContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RikkleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
