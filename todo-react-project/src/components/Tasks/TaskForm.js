import React, { Component } from 'react';


class TaskForm extends Component {

    tareaEnEdicion;

    constructor(props){
        super(props);
        this.state = { task: null};
    }

    editar(e){
        e.preventDefault();
        console.log(this.state.task);
        this.props.onEditar(this.state.task);
        this.state = { task: null};
    }

    guardar(e){
        e.preventDefault();
        let task = {    id: (new Date().getTime()).toString(16) , 
                        category: this.refs.category.value , 
                        name: this.refs.name.value
                    };
        
        this.props.onGuardar(task);
        this.refs.category.value = "";
        this.refs.name.value = "";
    }

    
    componentWillReceiveProps(){
        console.log("TaskForm > componentWillReceiveProps > props",this.props);
        console.log("TaskForm > componentWillReceiveProps > state",this.state);
            this.setState({
            task: this.props.task
        });
    }

    
      handleChange(e) {
          this.setState({
              task : {
                id : this.state.task.id,
                name : this.state.task.name,
                category : this.state.task.category,
                [e.target.name]: e.target.value
              }
          });
        console.log(e.target.value);
        //this.props.task.category = event.target.value;
      }

      componentWillUpdate(){
          console.log( "TaskForm > componentWillUpdate" , this.props)
        
      }

  render() {
      if(this.state.task){
        
        return (
            <div className="TaskForm">
            <h3>Editar Tarea</h3>
            <form onSubmit={this.editar.bind(this)}>
                <div className="form-group">
                    <label>Categoria</label>
                    <div className="form-input">
                        <input type="text" name="category" value={this.state.task.category} onChange={this.handleChange.bind(this)} />
                    </div>
                </div>
    
                <div className="form-group">
                    <label>Nombre</label>
                    <div className="form-input">
                        <input type="text" name="name" value={this.state.task.name} onChange={this.handleChange.bind(this)} />
                    </div>
                </div>
    
                <button className="btn btn-info">Editar</button>
            </form>
            </div>
        );
      }else{
        return (
            <div className="TaskForm">
            <h3>Adicionar Tarea</h3>
            <form onSubmit={this.guardar.bind(this)}>
                <div className="form-group">
                    <label>Categoria</label>
                    <div className="form-input">
                        <input type="text" ref="category"/>
                    </div>
                </div>
    
                <div className="form-group">
                    <label>Nombre</label>
                    <div className="form-input">
                        <input type="text" ref="name"/>
                    </div>
                </div>
    
                <button className="btn btn-info">Agregar</button>
            </form>
            </div>
        );
      }
  }
}

export default TaskForm;
