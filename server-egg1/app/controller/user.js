'use strict';

const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken')
class UserController extends Controller {
  async login() {
    const { ctx ,app } = this;
    const { username,password  }    = ctx.request.body
    const result = await ctx.service.user.login(username)
    if(result.length===0){
        ctx.body={code:0,msg:'用户名不存在'}
        return
    }
    if(password !== result[0].password){
        ctx.body={code:0,msg:'密码错误'}
        return
    }
    let userToken = {
      ...result[0],
      tim:new Date().getTime()
    }
    const token  = jwt.sign(userToken,app.config.keys)
    ctx.body = {
        code:1,
        msg:'登录成功',
        token
    }
  }
  async getuser(){
    const { ctx } = this
    const result = await ctx.service.user.getuser()
    if(result.length>0){
      ctx.body = {
        code:1,
        msg:'',
        result
      }
    }
  }
  async deletelist(){
    const { ctx } = this
    const result = await ctx.service.user.deletelist(ctx.request.body)
    if(result.affectedRows===0){
      ctx.body={code:0,msg:'操作失败'}
      return
    }
    ctx.body={code:0,msg:'操作成功'}
  }
  async addlist(){
     const { ctx } = this
     const { username,password,name} = ctx.request.body
     const results = await ctx.service.user.addlock(username)
     if(results.length>0){
       ctx.body={code:0,msg:'用户名已存在'}
       return
     }
     let role = "游客"
     const result = await ctx.service.user.addlist(username,password,name,role)
     if(result.affectedRows===0){
      ctx.body={code:0,msg:'操作失败'}
      return
    }
    ctx.body={code:0,msg:'操作成功'}
  }
  async uplist(){
    const { ctx } = this
     const result = await ctx.service.user.uplist(ctx.request.body)
     if(result.affectedRows===0){
      ctx.body={code:0,msg:'操作失败'}
      return
    }
    ctx.body={code:0,msg:'操作成功'}
  }
}

module.exports = UserController;