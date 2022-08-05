import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RikkleRoutingModule } from './rikkle-routing.module';

import { RikkleContainerComponent } from './components/rikkle-container/rikkle-container.component';
import { ScreenShotsComponent } from './components/screen-shots/screen-shots.component';
import { CreditsComponent } from './components/credits/credits.component';
import { RikkleStoryComponent } from './components/rikkle-story/rikkle-story.component';

@NgModule({
  declarations: [
    RikkleContainerComponent,
    ScreenShotsComponent,
    CreditsComponent,
    RikkleStoryComponent,
  ],
  imports: [CommonModule, RikkleRoutingModule],
})
export class RikkleModule {}
