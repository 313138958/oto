const jwt = require('jsonwebtoken')
const url = require('url')

function verifytoken(token,key){
    return new Promise(res=>{
        jwt.verify(token,key,(error,result)=>{
            if(error) throw error
            res(result)
        })
    })
}

module.exports = options => {
    return async (ctx, next)=> {
       if(options.includes(url.parse(ctx.url).pathname)){
           await next()
           return
       }

      let token = ctx.get('token')

      if(!token){
          ctx.status = 401
          ctx.body ={code:0,msg:'权限不足,请登录'}
          return
      }
      let info 
      try{
        info = await verifytoken(token,ctx.app.config.keys)
      }
      catch(error){
        ctx.status = 401
        ctx.body ={code:0,msg:'权限不足,请登录'}
      }
      
      let { tim } = info
      let oneTime = new Date().getTime()
      let time = (oneTime-tim)/1000/60/60
      if(time >=6){
          ctx.body={code:0,msg:'登录超时,请重新登录'}
      }
      ctx.info = info 
      await next()

    };
  }