import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RikkleContainerComponent } from './components/rikkle-container/rikkle-container.component';
import { CreditsComponent } from './components/credits/credits.component';
import { ScreenShotsComponent } from './components/screen-shots/screen-shots.component';
import { RikkleStoryComponent } from './components/rikkle-story/rikkle-story.component';

const routes: Routes = [
  {
    path: '',
    component: RikkleContainerComponent,
    children: [
      {
        path: 'story',
        component: RikkleStoryComponent,
      },
      {
        path: 'credits',
        component: CreditsComponent,
      },
      {
        path: 'screen-shots',
        component: ScreenShotsComponent,
      },
      { path: '', redirectTo: 'story', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RikkleRoutingModule {}
