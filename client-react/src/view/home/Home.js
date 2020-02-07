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
        navlist:[]
      }
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      }
      handleClick = ()=>{
        localStorage.clear()
        this.props.history.push('/login')
      }
    render() {
        return (
            <div className="home">
            <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" onClick={()=>this.props.history.push('/home/wrok')}>工作台</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          {
              this.state.navlist.map((item,key)=>{
                ++key
                return <SubMenu key={'sub' + key} title={<span><Icon type={item.icon} /><span>{item.title}</span></span>}>
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
            <div style={{float:"right"}} onClick={this.handleClick}> {localStorage.user}|退出 </div>
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
    componentDidMount(){
      this.Api('get','/getmenu').then(res=>{
        this.setState({
          navlist:res.data.Menu
        })
      })
    }
}
export default Home