import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutContainerComponent } from './components/about-container/about-container.component';

const routes: Routes = [{ path: '', component: AboutContainerComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AboutRoutingModule {}
