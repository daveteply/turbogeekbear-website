import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { RikkleContainerComponent } from './components/rikkle-container/rikkle-container.component';

@NgModule({
  declarations: [RikkleContainerComponent],
  imports: [CommonModule, ProjectsRoutingModule],
})
export class ProjectsModule {}
