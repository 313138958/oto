import React, { Component } from 'react'
import {Form,Input,Button,} from 'antd';

  class Register extends Component {
    state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };
  
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          this.Api('post','/register',values).then(res=>{
              console.log(res)
          })
        }
      });
    };

    render() {
      const { getFieldDecorator } = this.props.form;
  
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 10 },
        },
      };
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
        },
      };
      return (
        <div className='login'>
            <h1>注册界面  <small>ZHUCE</small> </h1>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="用户名">
            {getFieldDecorator('username', {
              rules: [
                {
                  required: true,
                  message: 'Please input your username',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="密码" hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!',
                },
                {
                  validator: this.validateToNextPassword,
                },
              ],
            })(<Input.Password />)}
          </Form.Item>
          <Form.Item label="确认密码" hasFeedback>
            {getFieldDecorator('confirm', {
              rules: [
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                {
                  validator: this.compareToFirstPassword,
                },
              ],
            })(<Input.Password onBlur={this.handleConfirmBlur} />)}
          </Form.Item>
          <Form.Item label="昵称">
            {getFieldDecorator('name', {
              rules: [
                {
                  required: true,
                  message: 'Please input your name',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="QQ号">
            {getFieldDecorator('qqhao', {
              rules: [
                {
                  required: true,
                  message: 'Please input your qqhao',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="E-mail">
            {getFieldDecorator('qqemail', {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
        </div>
      );
    }
  }

  export default Form.create({ name: 'register' })(Register)