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
    const token  = jwt.sign({...result[0]},app.config.keys)
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
}

module.exports = UserController;