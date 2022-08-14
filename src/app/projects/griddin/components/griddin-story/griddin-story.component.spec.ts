import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GriddinStoryComponent } from './griddin-story.component';

describe('GriddinStoryComponent', () => {
  let component: GriddinStoryComponent;
  let fixture: ComponentFixture<GriddinStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GriddinStoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GriddinStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
