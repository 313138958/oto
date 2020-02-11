'use strict';

const Controller = require('egg').Controller;
const jwt   = require('jsonwebtoken')
class UserController extends Controller {
  async login() {
    const { ctx } = this;
    const { username,password} = ctx.request.body
    const result = await ctx.service.user.login(username)
    if(result.length ===0){
        ctx.body = {code:0,msg:'用户名不存在'}
        return
    }
    if(result[0].password !==password ){
        ctx.body ={code:0,msg:'密码错误'}
        return
    }
    let sswtoken = {
        ...result[0],
        reqTime:new Date().getTime()
    }
    const token = jwt.sign(sswtoken,ctx.app.config.keys)
    ctx.body = {code:1,msg:'登录成功',token};
  }
  async register(){
    const { ctx } = this;
    const { username} = ctx.request.body
    const result  = await ctx.service.user.login(username)
    if(result.length>0){
        ctx.body={code:0,msg:'用户名已存在'}
        return
    }
    const results = await ctx.service.user.register(ctx.request.body)
    if(results.affectedRows===1){
        ctx.body = {code:1,msg:'注册成功'};
    }
    
  }
}

module.exports = UserController;