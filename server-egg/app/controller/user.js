'use strict';

const Controller = require('egg').Controller;
const md5 = require('md5')
const jwt = require('jsonwebtoken')
class UserController extends Controller {
  async login() {
    const { ctx } = this;
    const { username,password } = ctx.request.body
    
    let pwd = md5(password)
    const result = await ctx.service.user.login(username)
    if(result.length===0){
        ctx.body={code:0,msg:'用户不存在'}
        return
    }
    if(result[0].password !==pwd){
        ctx.body={code:0,msg:'密码错误'}
        return
    }
    const token = jwt.sign({...result[0]},ctx.app.config.keys)
    ctx.body={code:1,msg:'登录成功',token}
  }
  async register(){
    const { ctx } = this;
    const { username,password } = ctx.request.body
    let pwd = md5(password)
    const result = await ctx.service.user.registry(username)
    if(result.length>0){
       ctx.body={code:0,msg:'用户名已存在'}
       return
    }
    const results = await ctx.service.user.register(username,pwd)
    if(results.affectedRows>0){
      ctx.body={
          code:1,
          msg:'注册成功,跳转登录界面'
      }
    }
  }
}

module.exports = UserController;