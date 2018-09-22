import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './components/project/project.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectMenuComponent } from './components/project-menu/project-menu.component';

const routes: Routes = [
  { path: "", redirectTo: "menu", pathMatch:"full"},
  { path: "menu", component: ProjectMenuComponent},
  { path: "project", component: ProjectComponent},
  { path: "projects", component: ProjectListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
