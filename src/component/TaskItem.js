import React, { Component } from 'react'

export class TaskItem extends Component {

    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.tasks.id);
    }

    onDeleteRow = () => {
        this.props.onDeleteRow(this.props.tasks.id);
    }
    
    onUpdateRow= () => {
        this.props.onUpdateRow(this.props.tasks.id);
    }

    render() {
        let {tasks, index} = this.props;
        return (
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{tasks.job_name}</td>
                <td>
                    <span onClick={this.onUpdateStatus} className={tasks.status === 0 ? 'badge badge-danger' : 'badge badge-success'}>
                        {tasks.status === 0 ? 'Chưa làm' : 'Đã làm'}
                    </span>
                </td>
                <td>
                    <button onClick={this.onUpdateRow} type="button" className="btn btn-warning">sửa</button>
                    <button onClick={this.onDeleteRow} type="button" className="ml-1 btn btn-danger">xóa</button>
                </td>
            </tr>
        )
    }
}

export default TaskItem
