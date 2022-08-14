import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsContainerComponent } from './projects-container/projects-container.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsContainerComponent,
    children: [
      {
        path: 'rikkle',
        loadChildren: () =>
          import('./rikkle/rikkle.module').then((m) => m.RikkleModule),
      },
      {
        path: 'griddin',
        loadChildren: () =>
          import('./griddin/griddin.module').then((m) => m.GriddinModule),
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
