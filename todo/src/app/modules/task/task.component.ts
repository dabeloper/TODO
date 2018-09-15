import { Component, OnInit, OnDestroy } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit, OnDestroy {

  tareas: Task[];
  tareaEnEdicion: Task;
  status: string;

  private _subscripctions: Subscription[] = [];
  constructor(private tareasService:TaskService) { 
    this.tareas = []; 
  }

  ngOnInit() {
    this._subscripctions.push( this.tareasService.getTasks().subscribe( (tasks)=>{
      this.tareas = tasks;
    } ));
    this.status = "Agregar";
  }

  ngOnDestroy(){
    this._subscripctions.forEach(
      subscription => subscription.unsubscribe()
    );
  }

  deleteTask(tarea: Task){
    this.tareasService.delTask(tarea);
  }

  editTask(tarea:Task){
    this.tareaEnEdicion = tarea;
    this.status = "Editar";
  }

  procesarFormulario(task:Task){
    
    if(this.status=="Agregar"){
      this.tareasService.addTask(task);
    }else{
      this.tareasService.updateTask(task);
    }

    this.status = "Agregar";
  }

}
