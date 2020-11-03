import React, { Component } from 'react';
import TaskItem from './TaskItem';

export class TaskList extends Component {
 
    render() {
        let { tasks } = this.props;
        let elements = tasks.map((task, index)=> {
            return <TaskItem 
                        onUpdateRow={this.props.onUpdateRow}
                        onDeleteRow={this.props.onDeleteRow}
                        onUpdateStatus={this.props.onUpdateStatus}
                        key={index}
                        tasks={task} 
                        index={index}
                    >
                    </TaskItem>
        });
        return (
            <div >
                <div className="row mt-2">
                        <div className="col-md-6 p-0">
                            <div className="form-group">
                                <input type="text" className="form-control"  />
                            </div>
                        </div>
                        <div className="col-md-3 p-0">
                            <button type="button" className="btn btn-primary">Tìm kiếm</button>
                            </div>
                            <div className="col-md-3">
                            <button type="button" className="btn btn-primary">Sắp xếp</button>
                        </div>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">STT</th>
                                    <th scope="col">Tên</th>
                                    <th scope="col">Trạng thái</th>
                                    <th scope="col">Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                               {elements}
                            </tbody>
                        </table>
                </div>
            </div>
        )
    }
}

export default TaskList
