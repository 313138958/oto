import axios from 'axios'

export default  (method,url,data=[])=>{
    let resConfig = {}
    let type      = method==="get"?'parmas':'data'
    resConfig.method = method
    resConfig.url    = url
    resConfig[type]   = data
    resConfig.headers={
        token:localStorage.getItem('token')
    }

    return axios(resConfig).catch(error=>{
        if(error.response.status ===404){
            alert('接口不存在')
            return
        }
        if(error.response.status ===500){
            alert('服务器端出错')
            return
        }
        if(error.response.status ===401){
            if(window.confirm('权限不足,或没登录,请登录')){
                window.location.href = '/login'
            }
            return
        }
    })
}