import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import {Task} from '../models/task';
import { Observable } from 'rxjs'; //Programacion reactiva, mantener revisando - obteniendo cambios para presentarlos

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskCollection: AngularFirestoreCollection<Task>;
  taskDoc: AngularFirestoreDocument<Task>;
  tasks: Observable<Task[]>;

  constructor(private db: AngularFirestore) {
    this.taskCollection = db.collection("tasks");
    this.tasks = this.taskCollection.valueChanges();
  }

  getTasks(){
    return this.tasks;
  }


}
