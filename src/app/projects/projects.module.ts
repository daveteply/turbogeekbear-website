import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { RikkleContainerComponent } from './components/rikkle-container/rikkle-container.component';
import { RikklePrivacyComponent } from './components/rikkle-privacy/rikkle-privacy.component';

@NgModule({
  declarations: [
    RikkleContainerComponent,
    RikklePrivacyComponent
  ],
  imports: [CommonModule, ProjectsRoutingModule],
})
export class ProjectsModule {}
