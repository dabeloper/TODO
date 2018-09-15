import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../../models/task';


@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  owner: string = "NN";
  @Input() public tareas:Task[];
  @Output() public onDelete = new EventEmitter<void>();
  @Output() public onEdit = new EventEmitter<void>();


  constructor() {}

  ngOnInit() {
  }

  deleteTask(e,task){
    this.onDelete.emit(task);
  }
  
  editTask(e,task){
    this.onEdit.emit(task);
  }
}
