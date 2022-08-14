import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsContainerComponent } from './projects-container/projects-container.component';
import { CreditsComponent } from './components/credits/credits.component';

@NgModule({
  declarations: [ProjectsContainerComponent, CreditsComponent],
  imports: [CommonModule, ProjectsRoutingModule],
})
export class ProjectsModule {}
