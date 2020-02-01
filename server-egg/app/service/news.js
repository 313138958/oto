const Service = require('egg').Service;

class NewsService extends Service {
    async getlist(){
        const result = this.app.mysql.select('program')
        return result
    }
}   

module.exports = NewsService;