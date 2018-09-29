import React, { Component } from 'react';
import firebase from '../Firebase';

import './Tasks.css';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

class Tasks extends Component {

  tareaEnEdicion;

  constructor(){
    super();
    this.state = {
      tareaEnEdicion: {id:null, category:null, name:null},
      tasks : [],
      db: firebase.firestore()
      /*[
        { id: "1", name: "Organizar escritorio" , category: "Laboral"},
        { id: "2", name: "Requerimientos" , category: "WebP"},
        { id: "3", name: "Organizar cuarto" , category: "Personal"}
      ]*/
    };
    this.state.db.settings( {timestampsInSnapshots: true} ); //Obligatorio para rendimiento 
  }

  refresh(){
    this.setState({
      tasks : [],
      tareaEnEdicion : null
    });
    let parent = this;
    
    //let db = firebase.firestore();
    //db.settings( {timestampsInSnapshots: true} ); //Obligatorio para rendimiento 
    this.state.db.collection("tasks").get().then( function(querySnapshot){
      querySnapshot.forEach( doc => parent.addTask(doc.data()) );
    });
  }

  addTask(task){
    let tasksTemp = this.state.tasks;
    tasksTemp.push(task); 
    this.setState({
      tasks : tasksTemp
    });
  }

  componentWillMount(){
    this.refresh();
  }

  handleEditar(task){
    console.log("handleEditar",task);
    //db.collection("tasks").add(task).then( value=> this.addTask(task) )
    this.state.db.collection("tasks").doc(task.id).set(task).then( value=> this.refresh() );
    this.refresh();
  }
  

  handleGuardar(task){
    //db.collection("tasks").add(task).then( value=> this.addTask(task) )
    this.state.db.collection("tasks").doc(task.id).set(task).then( value=> this.refresh() );
  }
  
  handleDelete(id){
    this.state.db.collection("tasks").doc(id).delete().then( value => this.refresh());
  }

  handleEdit(task){
    this.setState({
      tareaEnEdicion : task
    });
    console.log("Tasks > handleEdit",task);
    //this.forceUpdate();
    /*
    task.name = "Editado";
    this.state.db.collection("tasks").doc(task.id).set(task).then( value=> this.refresh() );
    */
  }

  render() {
    let taskList = this.state.tasks.map( (task) => {
      return <TaskItem key={task.id} task={task} 
                        onDelete={this.handleDelete.bind(this)}
                        onEdit={this.handleEdit.bind(this)}/>
    });

    return (
      <div className="Tasks container">
      <h1>Tareas de {this.props.owner}</h1>
        <ul className="list-group">{taskList}</ul>
        <TaskForm task={this.state.tareaEnEdicion}
                  onGuardar={this.handleGuardar.bind(this)}
                  onEditar={this.handleEditar.bind(this)}/>
      </div>
    );
  }

}

export default Tasks;
