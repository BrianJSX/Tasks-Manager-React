import React, { Component } from 'react'
import TaskForm from './component/TaskForm'
import TaskList from './component/TaskList'
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      tasks: [],  //danh sách các task
      isDisplayForm: false, //true là có có TaskForm, ngược lại
      taskedit: null
    }
  }

  componentWillMount(){
    if(localStorage && localStorage.getItem('tasks')){
      let tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: tasks
      });
    }
  }

  //event
  onCloseForm = () => {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm,
      taskedit: null
    });
  }

  //thêm task
  submitTask = (data) => {
    let {tasks} = this.state;
    if(this.state.taskedit === null){
      data.id = uuidv4();
      tasks.push(data);
    } else {
      let index = _.findIndex(tasks, (tasks) => {
        return tasks.id === this.state.taskedit
      });
      data.id = uuidv4();
      tasks[index] = data;
    }
    this.setState({
      tasks: tasks
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  //update status
  updateStatus = (id) => {
    let {tasks} = this.state;
    let index = _.findIndex(tasks, (tasks) => {
      return tasks.id === id;
    });
    tasks[index].status = !tasks[index].status;
    this.setState({
      tasks: tasks
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  //delete row
  onDeleteRow = (id) => {
    let {tasks} = this.state;
    _.remove(tasks, (tasks) => {
      return tasks.id === id;
    });
    this.setState({
      tasks: tasks,      
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  //update row
  onUpdateRow = (id) => {
    this.setState({
      taskedit: id, 
      isDisplayForm: true,
    });
  }

  render() {
    let {tasks, isDisplayForm} = this.state;
    let element = isDisplayForm 
    ? <TaskForm taskedit = {this.state.taskedit} submitTask={this.submitTask} onCloseForm={this.onCloseForm}></TaskForm> 
    :  '';
    return (
      <div className="container">
        <div className="row">
            <div className="col-md-4">
            </div>
            <div className="col-md-4">
                <h1>Quản lý công việc</h1>
            </div>
            <div className="col-md-4">
            </div>
        </div>
        <div className="row">
            {element}
            <div className={isDisplayForm ? 'col-md-8 p-4 ml-1' : 'col-md-12 p-4 ml-1'} style={{border: '1px solid gray', borderRadius: '20px'}}>
                <div className="row">
                    <div className="col-md-12">
                        <button onClick={this.onCloseForm} type="button" className="btn btn-primary">Thêm công việc</button>
                    </div>
                </div>
              <TaskList 
                tasks={tasks}
                onUpdateStatus={this.updateStatus}
                onDeleteRow={this.onDeleteRow}
                onUpdateRow={this.onUpdateRow}
               >
               </TaskList>
            </div>
        </div>
      </div>
    )
  }
}

export default App

