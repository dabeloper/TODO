import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { TaskService } from './services/task.service';
import { InicioComponent } from './components/inicio/inicio.component';
import { HeaderComponent } from './components/header/header.component';

import {AppRoutingModule} from './app.routes';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthGuardService } from './services/authguard.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    InicioComponent,
    HeaderComponent,
    AuthComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'todo-app'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
  ],
  providers: [TaskService,AuthService,AngularFireAuth,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
