const Service = require('egg').Service;

class RoleService extends Service {
    async getmenu(role){
        const result = await this.app.mysql.select('tab',{where:{role}})
        return result
    }
}

module.exports = RoleService;