const Service = require('egg').Service;

class UserService extends Service {
  async login(username) {
    const result = await this.app.mysql.select('user',{where:{username}})
    return result
  }
  async getuser(){
    const result = await this.app.mysql.select('user')
    return result
  }
}

module.exports = UserService;