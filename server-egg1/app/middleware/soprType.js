const url = require('url')
module.exports = options => {
    return async (ctx, next)=> {
        let nowUrl = url.parse(ctx.url).pathname

        let newArr = options.map(item=>item.url)

        if(newArr.includes(nowUrl)){
            let { role } = ctx.info
            let res   = await ctx.app.mysql.select('opr',{where:{role}})

            let nowOpr = null

            options.forEach(item => {
                if(item.url === nowUrl){
                    nowOpr = item.type
                }
            })

            if(res.some(item=>item.opr === nowOpr)){
                await next()
                return
            }
            ctx.body = {code:0,msg:'无权操作'}
            return
        }
        await next()
    }
}