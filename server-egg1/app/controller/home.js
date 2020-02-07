'use strict';

const Controller = require('egg').Controller;
const menuList   = require('../../config/menuList')
class HomeController extends Controller {
  async getmenu() {
    const { ctx } = this;
      let Roles = await ctx.service.role.getmenu(ctx.info.role)
          Roles = Roles.map(item => item.menu)
      let list  = menuList.filter(item=>Roles.includes(JSON.stringify(item.key)))     

      let Menu  = []
      list.forEach(item=>{
         let index = Menu.findIndex(jtem=>jtem.title === item.title)
          if(index !== -1 ){
            Menu[index].sub.push({
              name:item.name,
              key:item.key,
              to:item.to
            })
            return
          }
          Menu.push({
            title:item.title,
            icon:item.icon,
            sub:[
              {
                name:item.name,
                key:item.key,
                to:item.to
              }
            ]
          })
        })
      ctx.body = {code:1,msg:'',Menu}
  }
}

module.exports = HomeController;
