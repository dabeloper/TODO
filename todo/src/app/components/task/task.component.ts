import { Component, OnInit } from '@angular/core';
import {Task} from '../../models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  owner: string;
  taskList: Task[];
  task: Task;
  status: string = "add";

  constructor() {
    this.owner = "David";
    this.taskList = [
      {
        id : "1",
        name: "Lavar platos",
        category: "Casa"
      },
        {
          id : "2",
          name: "Realizar tarea",
          category: "Diplomado"
        },
          {
            id : "3",
            name: "Reunión",
            category: "Laboral"
          },
    ];

    this.task = new Task;
  }

  ngOnInit() {
  }

  addTask(){
    if(this.status=="add"){
      this.taskList.push(this.task);
    }

    this.task = new Task;
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

    var i = this.taskList.findIndex( (tareaI) => { return tareaI.id == tarea.id} );
    this.taskList.splice(i,1);
  }

}
