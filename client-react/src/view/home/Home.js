import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import { Switch,Redirect,Route } from 'react-router-dom'
import userlist from './userlist'
import useradd from './useradd'
import rolelist from './rolelist'
import roleadd from './roleadd'
import wrok from './wrok'
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
class Home extends Component {
    state = {
        collapsed: false,
        navlist:[
            {
                title:'用户管理',
                type:'user',
                key:'sub1',
                sub:[
                    {   
                        key:1,
                        name:'用户列表',
                        to:'/home/userlist'
                    },
                    {   
                        key:2,
                        name:'添加用户',
                        to:'/home/useradd'
                    }
                ]
            },
            {
                title:'角色管理',
                type:'team',
                key:'sub2',
                sub:[
                    {   
                        key:3,
                        name:'角色列表',
                        to:'/home/rolelist'
                    },
                    {   
                        key:4,
                        name:'添加角色',
                        to:'/home/roleadd'
                    }
                ]
            }
        ]
      }
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      }
    render() {
        return (
            <div className="home">
            <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" onClick={()=>this.props.history.push('/home/wrok')}>工作台</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          {
              this.state.navlist.map(item=>{
                return <SubMenu key={item.key} title={<span><Icon type={item.type} /><span>{item.title}</span></span>}>
                    {
                        item.sub.map(jtem=> <Menu.Item key={jtem.key} onClick={()=>this.props.history.push(jtem.to)} >{jtem.name}</Menu.Item>)  
                    }
                </SubMenu>
                  
                })
          }
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            <Switch>
                <Redirect from='/home' to='/home/wrok' exact/>
                <Route path="/home/wrok" component={wrok}></Route>
                <Route path="/home/userlist" component={userlist}></Route>
                <Route path="/home/useradd" component={useradd}></Route>
                <Route path="/home/rolelist" component={rolelist}></Route>
                <Route path="/home/roleadd" component={roleadd}></Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
            </div>
        )
    }
}
export default Home