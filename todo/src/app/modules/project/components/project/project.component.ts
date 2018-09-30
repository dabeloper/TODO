import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Project } from '../../../../models/project';
import { Constants } from '../../../../models/constants';
import { Task } from '../../../../models/task';
import { Subscription } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';
import { ProjectService } from '../../../../services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit, OnDestroy {
  

  @Output() public onSubmit = new EventEmitter<boolean>();
  @Input() estado_formulario: number;
  @Input() proyecto: Project;
  tareas: Task[];
  private _subscripctions: Subscription[] = [];

  constructor(private tareasService:TaskService , private projectService: ProjectService) {
    this.restaurarFormulario();
   }

  ngOnInit() {
    this._subscripctions.push( this.tareasService.getTasks().subscribe( (tasks)=>{
      this.tareas = tasks;
    } ));
  }

  restaurarFormulario(){
    this.estado_formulario = Constants.crear;
    this.proyecto = new Project();
    this.onSubmit.emit(true);
  }

  tareaEnProyecto(t){
    try{
      for(let tarea of this.proyecto.tasks) {
        if( tarea.id == t.id ) return true; 
      }
    }catch{}
    return false;
  }

  estaCreando(){
    return this.estado_formulario == Constants.crear;
  }
  
  tituloVentana(){
    switch(this.estado_formulario){
      case Constants.crear: return "Nuevo Proyecto";
      case Constants.editar: return "Editar Proyecto";
      case Constants.eliminar: return "Eliminar Proyecto";
    }
  }

  tituloBoton(){
    switch(this.estado_formulario){
      case Constants.crear: return "Crear";
      case Constants.editar: return "Editar";
      case Constants.eliminar: return "Eliminar";
    }
  }

  cancelar(){
    this.restaurarFormulario();
  }
  
  submitForm(){
    switch(this.estado_formulario){
      case Constants.crear: 
        this.projectService.addProject(this.proyecto);
        this.proyecto = new Project();
        break;

      case Constants.editar: 
        this.projectService.updateProject(this.proyecto);
        this.proyecto = new Project();
        break;
      case Constants.eliminar: return "Eliminar";
    }
    this.restaurarFormulario();
  }

  onChange(e){
    console.log( "Event" , e);
    console.log( "Tasks Project" , this.proyecto.tasks);
  }

  ngOnDestroy(): void {
    this._subscripctions.forEach(
      subscription => subscription.unsubscribe()
    );
  }

}
