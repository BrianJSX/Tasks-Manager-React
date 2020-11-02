import React, { Component } from 'react'

export class TaskList extends Component {
    render() {
        return (
            <div className="col-md-8 p-4 ml-1" style={{border: '1px solid gray', borderRadius: '20px'}}>
                <div className="row">
                    <div className="col-md-12">
                        <button type="button" className="btn btn-primary">Thêm công việc</button>
                    </div>
                </div>
                <div className="row mt-2">
                        <div className="col-md-6 p-0">
                            <div className="form-group">
                                <input type="text" className="form-control" name id aria-describedby="helpId" placeholder />
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
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                            </tbody>
                        </table>
                </div>
            </div>
        )
    }
}

export default TaskList
