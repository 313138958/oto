const Service = require('egg').Service;

class UserService extends Service {
  async login(username) {
    const result = await this.app.mysql.select('user',{where:{username}})
    return result;
  }
  async registry(username){
    const result = await this.app.mysql.select('user',{where:{username}})
    return result;
  }
  async register(username,pwd){
    const result = await this.app.mysql.insert('user',{username,password:pwd})
    return result
  }
}

module.exports = UserService;