import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GriddinRoutingModule } from './griddin-routing.module';
import { GriddinContainerComponent } from './components/griddin-container/griddin-container.component';
import { GriddinStoryComponent } from './components/griddin-story/griddin-story.component';
import { ScreenShotsComponent } from './components/screen-shots/screen-shots.component';

@NgModule({
  declarations: [
    GriddinContainerComponent,
    GriddinStoryComponent,
    ScreenShotsComponent,
  ],
  imports: [CommonModule, GriddinRoutingModule],
})
export class GriddinModule {}
