import React, { Component } from 'react';
//import './TaskItem.css';

class TaskItem extends Component {

  constructor(){
    super();
  }

  render() {
    return (
      <li className="TaskItem list-group-item">
          {this.props.task.name} - {this.props.task.category}
          <button onClick={this.taskEdit.bind(this)} className="btn btn-warning">Editar</button>
          <button onClick={this.taskDelete.bind(this)} className="btn btn-danger">Eliminar</button>
      </li>
    );
  }

  taskEdit(){
    this.props.onEdit(this.props.task);
  }

  taskDelete(){
    this.props.onDelete(this.props.task.id);
  }
}

export default TaskItem;
