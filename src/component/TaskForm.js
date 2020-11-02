import React, { Component } from 'react'

export class TaskForm extends Component {
    render() {
        return (
            <div className="col-md-3 p-4" style={{border: '1px solid gray', borderRadius: '20px'}}>
              <div className="row" style={{backgroundColor: 'darksalmon', borderRadius: '20px'}}>
                <div className="col-md-9">
                  <span><b>Thêm công việc</b></span>
                </div>
                <div className="col-md-3">
                  <button type="button" className="close" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group mt-1">
                    <label htmlFor>Tên</label>
                    <input type="text" name id className="form-control" placeholder aria-describedby="helpId" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor>Kích hoạt</label>
                    <select className="form-control" name id>
                      <option />
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <button type="button" className="btn btn-primary">Lưu</button>
                  <button type="button" className="btn btn-danger">Hủy</button>
                </div>
              </div>
            </div>
          );
    }
}

export default TaskForm
