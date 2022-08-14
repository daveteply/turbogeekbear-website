import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenShotsComponent } from './screen-shots.component';

describe('ScreenShotsComponent', () => {
  let component: ScreenShotsComponent;
  let fixture: ComponentFixture<ScreenShotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenShotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenShotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
