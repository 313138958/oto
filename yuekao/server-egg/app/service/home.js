const Service = require('egg').Service;

class UserService extends Service {
  async getlist(){
      const result = await this.app.mysql.select('piao')
      return result 
  }
}

module.exports = UserService;