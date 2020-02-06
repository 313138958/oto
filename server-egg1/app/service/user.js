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
  async deletelist({id}){
    const result = await this.app.mysql.delete('user',{id})
    return result
  }
  async addlock(username){
    const result = await this.app.mysql.select('user',{where:{username}})
    return result
  }
  async addlist(username,password,name,role){
    const result = await this.app.mysql.insert('user',{username,password,name,role})
    return result
  }
  async uplist({id,password,role}){
    const result = await this.app.mysql.update('user',{id,password,role})
    return result
  }
}

module.exports = UserService;