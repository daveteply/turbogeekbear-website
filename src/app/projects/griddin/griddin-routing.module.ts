import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GriddinContainerComponent } from './components/griddin-container/griddin-container.component';
import { GriddinStoryComponent } from './components/griddin-story/griddin-story.component';
import { CreditsComponent } from '../components/credits/credits.component';
import { ScreenShotsComponent } from './components/screen-shots/screen-shots.component';

const routes: Routes = [
  {
    path: '',
    component: GriddinContainerComponent,
    children: [
      {
        path: 'story',
        component: GriddinStoryComponent,
      },
      {
        path: 'credits',
        component: CreditsComponent,
        data: { title: 'griddin' },
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
export class GriddinRoutingModule {}
