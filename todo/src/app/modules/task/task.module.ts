import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { TasklistComponent } from './components/tasklist/tasklist.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TaskRoutingModule,
    FormsModule
  ],
  declarations: [TaskComponent, TasklistComponent, TaskFormComponent]
})
export class TaskModule { }
