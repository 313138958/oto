import React, { Component } from 'react'
import { Table, Modal ,Tag } from 'antd';
import Up from '../../components/Updata'
const { confirm } = Modal;
export default class userlist extends Component {
    state = {
        data:[],
        visible: false,
        look:{}
    }
    showDeleteConfirm =(id)=> {
        confirm({
          title: 'Are you sure delete this task?',
          content: 'Some descriptions',
          okText: 'Yes',
          okType: 'danger',
          cancelText: 'No',
          onOk:()=> {
            this.Api('post','/deletelist',{id}).then(res=>{
                alert(res.data.msg)
                this.getuserlist()
            })
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      }
      handleLock(item){
        this.setState({
          visible: true,
          look:item
        })
      }
    render() {
        const columns = [
            {
              title: 'Id',
              dataIndex: 'id',
              key: 'id'
            },
            {
              title: 'User',
              dataIndex: 'username',
              key: 'username',
            },
            {
                title: 'Role',
                dataIndex: 'role',
                key: 'role',
            },
            {
              title: '操作',
              dataIndex:'password',
              key:'password',
              render: (text, record) => (
                <div>
                  <Tag onClick={this.handleLock.bind(this,record)}>查看</Tag>
                  <Tag><Up record={record} getuserlist={this.getuserlist.bind(this)}></Up></Tag>
                  <Tag onClick={this.showDeleteConfirm.bind(this,record.id)}>删除</Tag>
                </div>
              ),
            },
          ]
        return (
            <div>
            <Table rowKey='id' columns={columns} dataSource={this.state.data} />
            <Modal
            title="用户信息"
            visible={this.state.visible}
            onOk={()=>this.setState({visible: false,})}
            onCancel={()=>this.setState({visible: false,})}
            okText="确认"
          >
          <p>用户名:{this.state.look.username}</p>
          <p>密码:{this.state.look.password}</p>
          <p>姓名:{this.state.look.name}</p>
          </Modal>
            </div>
        )
    }
    componentDidMount(){
        this.getuserlist()
    }
    getuserlist(){
        this.Api('get','/getuser').then(res=>{
            this.setState({
                data:res.data.result
            })
        })
    }
}
