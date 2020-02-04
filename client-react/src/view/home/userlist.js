import React, { Component } from 'react'
import { Table, Divider ,Button, Modal } from 'antd';
const { confirm } = Modal;
export default class userlist extends Component {
    state = {
        data:[]
    }
    showDeleteConfirm =()=> {
        confirm({
          title: 'Are you sure delete this task?',
          content: 'Some descriptions',
          okText: 'Yes',
          okType: 'danger',
          cancelText: 'No',
          onOk() {
            console.log('OK');
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      }
    render() {
        const columns = [
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name'
            },
            {
              title: 'Age',
              dataIndex: 'age',
              key: 'age',
            },
            {
                title: 'Role',
                dataIndex: 'role',
                key: 'role',
            },
            {
              title: 'Address',
              dataIndex: 'address',
              key: 'address',
            },
            {
              title: 'Action',
              key: 'action',
              render: (text, record) => (
                <span>
                <Button type="primary">编辑</Button>
                  <Divider type="vertical" />
                  <Button onClick={this.showDeleteConfirm} type="danger">
                    Delete
                    </Button>
                </span>
              ),
            },
          ]
        return (
            <div>
            <Table rowKey='id' columns={columns} dataSource={this.state.data} />
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
