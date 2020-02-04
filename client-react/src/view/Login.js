import React, { Component } from 'react'
import { Form, Icon, Input, Button} from 'antd';
class Login extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            this.Api('post','/login',values).then(res=>{
                alert(res.data.msg)
                if(res.data.code===1){
                    localStorage.setItem('token',res.data.token)
                    localStorage.setItem('user',values.username)
                    this.props.history.push('/home')
                }
            })
          }
        });
      }
    render() {
        const { getFieldDecorator } = this.props.form;
        const tailFormItemLayout = {
            wrapperCol: {
              xs: {
                span: 24,
                offset: 0,
              },
              sm: {
                span: 8,
                offset: 8,
              },
            }
        }
        return (
            <div className="box">
            <Form {...tailFormItemLayout} onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
          
      </Form>
            </div>
        )
    }
}
export default Form.create({ name: 'normal_login' })(Login)