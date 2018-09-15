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

  ngOnDestroy(): void {
    this._subscriptions.forEach( subscription => subscription.unsubscribe() );
  }

  owner: string;
  taskList: Task[];
  task: Task;
  status: string = "add";
  
  private _subscriptions: Subscription[] = [];

  constructor(private taskService: TaskService) {
    this.owner = "David";
    this.taskList = [];

    this.task = new Task;
  }

  ngOnInit() {
    this._subscriptions.push( this.taskService.getTasks().subscribe( (tasks)=> { 
      this.taskList = tasks;
      console.log(tasks); 
    } ) );
  }

  addTask(){
    if(this.status=="add"){
      //this.taskList.push(this.task);
      this.taskService.addTask(this.task);
    }else{
      this.taskService.updateTask(this.task);
    }

    this.task = new Task;
    this.status = "add";
  }

  editTask(event,tarea: Task){
    this.task = tarea;
    this.status = "edit";
  }

  deleteTask(event,tarea: Task){
    /*for( var i=0; i<this.taskList.length; i++){
      if( this.taskList[i] == tarea){
        this.taskList.splice(i,1);
        break;
      }
    }*/

    //var i = this.taskList.findIndex( (tareaI) => { return tareaI.id == tarea.id} );
    //this.taskList.splice(i,1);

    this.taskService.delTask(tarea);
  }

}
