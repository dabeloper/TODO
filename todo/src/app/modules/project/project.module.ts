import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './components/project/project.component';
import { ProjectMenuComponent } from './components/project-menu/project-menu.component';
import { ProjectListComponent } from './components/project-list/project-list.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule,
    FormsModule
  ],
  declarations: [ProjectComponent, ProjectMenuComponent, ProjectListComponent]
})
export class ProjectModule { }
