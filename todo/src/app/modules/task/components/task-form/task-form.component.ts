import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Task } from '../../../../models/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  @Output() public onSubmit = new EventEmitter<any>();
  @Input("tareaEditar") task: Task;
  @Input() status: string;

  constructor() { }

  ngOnInit() {
    this.task = new Task();
    this.status = "Agregar";
  }
  
  addTask(){
    this.onSubmit.emit(this.task);
    this.task = new Task();
  }

}
