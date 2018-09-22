import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { InicioComponent } from './components/inicio/inicio.component';
import { TaskComponent } from './components/task/task.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuardService } from './services/authguard.service';


const APP_ROUTES: Routes = [ 
    { path: "", redirectTo: 'inicio', pathMatch: 'full'}, 
    { path: "auth", component: AuthComponent}, 
    { path: "task", component: TaskComponent, canActivate:[AuthGuardService]}, 
    { path: "inicio", component: InicioComponent, canActivate:[AuthGuardService]},
    { path: "tarea", loadChildren: './modules/task/task.module#TaskModule', canActivate:[AuthGuardService]}, /* LazyLoad */
    { path: "project", loadChildren: './modules/project/project.module#ProjectModule', canActivate:[AuthGuardService]}, /* LazyLoad */
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
