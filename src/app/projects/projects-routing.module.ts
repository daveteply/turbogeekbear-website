import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RikkleContainerComponent } from './components/rikkle-container/rikkle-container.component';
import { RikklePrivacyComponent } from './components/rikkle-privacy/rikkle-privacy.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'rikkle',
        component: RikkleContainerComponent,
      },
      {
        path: 'rikkle-privacy',
        component: RikklePrivacyComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProjectsRoutingModule {}
