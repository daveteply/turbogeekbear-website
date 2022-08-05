import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { RikkleContainerComponent } from './components/rikkle-container/rikkle-container.component';
import { RikkleAboutComponent } from './components/rikkle-about/rikkle-about.component';

@NgModule({
  declarations: [RikkleContainerComponent, RikkleAboutComponent],
  imports: [CommonModule, ProjectsRoutingModule],
})
export class ProjectsModule {}
