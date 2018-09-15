import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from './task.component';
import { TasklistComponent } from './components/tasklist/tasklist.component';

const routes: Routes = [
  { path: "", redirectTo: "tarea", pathMatch:"full"},
  { path: "tarea", component: TaskComponent},
  { path: "tareas", component: TasklistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
