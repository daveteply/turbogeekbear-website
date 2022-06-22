import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RikkleContainerComponent } from './components/rikkle-container/rikkle-container.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'rikkle',
        component: RikkleContainerComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProjectsRoutingModule {}
