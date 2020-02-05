import React, { Component } from 'react'
import { Modal ,Input ,Select  } from 'antd';
const { Option, OptGroup } = Select;
class Updata extends Component {
    state ={
        visible:false,
        list:this.props.record
    }
    handleChange = (value) => {
        console.log(`selected ${value}`);
      }
    render() {
        const {list,visible } = this.state
        return (
            <div>
            <div onClick={()=>this.setState({visible:true})}>编辑</div>
            <Modal
            title="编辑信息"
            visible={visible}
            onOk={()=>this.setState({visible: false,})}
            onCancel={()=>this.setState({visible: false,})}
            okText="确认"
          >
          <p>用户名:<Input placeholder="default size" value={list.username} /></p>
          <p>密码:<Input placeholder="default size" value={list.password}/></p>
          <Select defaultValue="lucy" style={{ width: 200 }} onChange={this.handleChange}>
                <OptGroup label="Manager">
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                </OptGroup>
            </Select>
          </Modal>   
            </div>
        )
    }
}
export default Updata