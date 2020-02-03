'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async getlist() {
    const { ctx } = this;
    const result = await ctx.service.news.getlist()
    if(result.length>0){
        ctx.body = {code:1,msg:'',result}
    }
  }
  async getdetails(){
    const { ctx } = this;
    const result = await ctx.service.news.getdetails(ctx.request.body)
    if(result.length>0){
      ctx.body = {code:1,msg:'',result}
    }
  }
}

module.exports = NewsController;