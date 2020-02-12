'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async getlist(){
    const { ctx } = this;
    const result = await ctx.service.home.getlist()
    if(result.length>0){
      ctx.body = {code:1,msg:'',result};
    }
    
  }
}

module.exports = HomeController;
