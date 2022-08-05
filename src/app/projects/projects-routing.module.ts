import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RikkleContainerComponent } from './components/rikkle-container/rikkle-container.component';
import { RikkleAboutComponent } from './components/rikkle-about/rikkle-about.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'rikkle',
        component: RikkleContainerComponent,
      },
      {
        path: 'rikkle/about',
        component: RikkleAboutComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProjectsRoutingModule {}
