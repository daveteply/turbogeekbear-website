import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GriddinContainerComponent } from './griddin-container.component';

describe('GriddinContainerComponent', () => {
  let component: GriddinContainerComponent;
  let fixture: ComponentFixture<GriddinContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GriddinContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GriddinContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
