import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Project } from '../../../../models/project';
import { Subscription } from 'rxjs';
import { ProjectService } from '../../../../services/project.service';
import { Constants } from 'src/app/models/constants';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit, OnDestroy {
  
  @Input() estado_formulario: number;
  proyecto: Project;
  proyectos: Project[];
  private _subscripctions: Subscription[] = [];

  constructor(private projectServices:ProjectService) { }

  ngOnInit() {
    this._subscripctions.push( this.projectServices.getProjects().subscribe( (projects)=>{
      console.log(projects);
      this.proyectos = projects;
    } ));
    this.estado_formulario = Constants.crear;
    this.proyecto = new Project();
  }

  ngOnDestroy(): void {
    this._subscripctions.forEach(
      subscription => subscription.unsubscribe()
    );
  }

  editProject(e,project:Project){
    console.log(project);
  }

  deleteProject(e,project:Project){
    console.log(project);    
  }

}
