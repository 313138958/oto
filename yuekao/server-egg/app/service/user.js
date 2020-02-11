const Service = require('egg').Service;

class UserService extends Service {
  async login(username) {
    const result = await this.app.mysql.select('user',{where:{username}})
    return result;
  }
  async register({username,password,name,qqemail,qqhao}){
    const result = await this.app.mysql.insert('user',{username,password,name,qqemail,qqhao})
    return result;
  }
}

module.exports = UserService;