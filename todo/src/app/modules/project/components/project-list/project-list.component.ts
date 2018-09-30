import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Project } from '../../../../models/project';
import { Subscription } from 'rxjs';
import { ProjectService } from '../../../../services/project.service';
import { Constants } from 'src/app/models/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit, OnDestroy {
  
  readonly estado_edicion: number = Constants.editar;
  @Input() estado_formulario: number;
  proyectoEnEdicion: Project;
  proyectos: Project[];
  private _subscripctions: Subscription[] = [];

  constructor(private projectServices:ProjectService, private router: Router) { }

  ngOnInit() {
    this._subscripctions.push( this.projectServices.getProjects().subscribe( (projects)=>{
      this.proyectos = projects;
    } ));
  }

  ngOnDestroy(): void {
    this._subscripctions.forEach(
      subscription => subscription.unsubscribe()
    );
  }

  editProject(e,project:Project){
    this.proyectoEnEdicion = project;
    console.log(project);
  }

  deleteProject(e,project:Project){
    console.log(project);
    this.projectServices.delProject(project);
  }
  
  edicionFinalizada(){
    this.proyectoEnEdicion = null;
    this.estado_formulario = -1;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
    this.router.navigate(["/project/projects"]));
  }

}
