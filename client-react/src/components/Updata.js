import React, { Component } from 'react'
import { Modal ,Input ,Select  } from 'antd';
const { Option } = Select;
class Updata extends Component {
    state ={
        visible:false,
        username:this.props.record.username,
        password:this.props.record.password,
        values:''
    }
    handleChange = (value) => {
        console.log(`selected ${value}`);
        this.setState({
          values:value
        })
      }
    handleClick = ()=>{
        this.Api('post','/uplist',{
          id:this.props.record.id,
          password:this.state.password,
          role:this.state.values
        }).then(res=>{
          this.props.getuserlist()
          this.setState({visible:false})
        })

    }
    handleUp(key,e){
      this.setState({
        [key]:e.target.value
      })
    }
    render() {
        const {username,password,visible } = this.state
        return (
            <div>
            <div onClick={()=>this.setState({visible:true})}>编辑</div>
            <Modal
            title="编辑信息"
            visible={visible}
            onOk={this.handleClick}
            onCancel={()=>this.setState({visible: false,})}
            okText="确认"
          >
          <p>用户名:{username}</p>
          <p>密码:<Input placeholder="default size" value={password} onChange={this.handleUp.bind(this,'password')}/></p>
          <Select ref='ssw' defaultValue="游客" style={{ width: 200 }} onChange={this.handleChange}>
                <Option value="游客">游客</Option>
                <Option value="管理员">管理员</Option>
            </Select>
          </Modal>   
            </div>
        )
    }
}
export default Updata