const Service = require('egg').Service;

class NewsService extends Service {
    async getlist(){
        const result = this.app.mysql.select('program')
        return result
    }
    async getdetails({id}){
        const result = this.app.mysql.select('content',{where:{guishu:id}})
        return result
    }
}   

module.exports = NewsService;