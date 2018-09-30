import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projectCollection: AngularFirestoreCollection<Project>;
  projectDoc: AngularFirestoreDocument<Project>;
  projects: Observable<Project[]>;

  constructor(private readonly db: AngularFirestore) {
    this.projectCollection = db.collection("projects");
    this.projects = this.projectCollection.valueChanges();
  }
  
  getProjects(){
    return this.projects;
  }

  addProject(project: Project){
    var id = this.db.createId();
    project.id = id;
    this.projectCollection.doc( project.id ).set({"id":project.id,"name":project.name, "tasks":project.tasks});
  }

  delProject(project: Project){
    this.projectDoc = this.projectCollection.doc(project.id);
    this.projectDoc.delete();
  }

  updateProject(project: Project){
    this.projectDoc = this.projectCollection.doc(project.id);
    this.projectDoc.update(project);
  }
}
