import React, { Component } from 'react'
import TaskForm from './component/TaskForm'
import TaskList from './component/TaskList'

export class App extends Component {
  render() {
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
            <TaskForm></TaskForm>
            <TaskList></TaskList>
        </div>
      </div>
    )
  }
}

export default App

