import React, { Component } from 'react'

class TaskForm extends Component {
    constructor(props){
      super(props);
      this.state = {
        taskedit: '',
        job_name: '', // tên công việc
        status: false  // trạng thái false chưa làm true đã làm
      }
    }
    //Đóng Form
    onCloseForm = () => {
      this.props.onCloseForm();
    }
    //onChange value
    onChange = (event) => {
      let target = event.target;
      let name = target.name;
      let value = target.value;
      this.setState({
        [name] : value
      })
    }
    //add task
    submitTask = () => {
      this.props.submitTask(this.state);
    }
    
    cancelTask = () => {
      this.setState({
        name: '', 
        status: false
      })
      this.props.onCloseForm();
    }

    //render
    render() {
        let {taskedit} = this.props;
        return (
            <div className="col-md-3 p-4" style={{border: '1px solid gray', borderRadius: '20px'}}>
              <div className="row" style={{backgroundColor: 'darksalmon', borderRadius: '20px'}}>
                <div className="col-md-9">
                  <span><b>{taskedit===null ? 'Thêm công việc' : 'Cập nhật công việc'}</b></span>
                </div>
                <div className="col-md-3">
                  <button onClick={this.onCloseForm} type="button" className="close" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
              </div>
              <form>
                <div className="row">
                    <div className="col-md-12">
                      <div className="form-group mt-1">
                        <label >Tên</label>
                        <input type="text" className="form-control"
                          name='job_name'
                          value={this.state.job_name}
                          onChange = {this.onChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label >Kích hoạt</label>
                        <select className="form-control"
                         name='status'
                         value={this.state.status}
                         onChange = {this.onChange}
                        >
                          <option value={false}>Chưa làm</option>
                          <option value={true}>Đã làm</option>
                        </select>
                      </div>
                    </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <button onClick={this.submitTask} type="button" className="btn btn-primary">Lưu</button>
                    <button onClick={this.cancelTask} type="button" className=" ml-1 btn btn-danger">Hủy</button>
                  </div>
                </div>
              </form>
            </div>

          );
    }
}

export default TaskForm
