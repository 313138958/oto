import axios from 'axios'

export default (method,url,data=[])=>{
    let configReq = {}
    let type = method==='get'?'parmas':'data'
    configReq.method = method
    configReq.url    = url
    configReq[type]  = data
    configReq.headers={
        usertoken : localStorage.getItem('token')
    }
    return axios(configReq).catch(error=>{
        if(error.response.status ===404){
            alert('权限不足,请登录')
            return
        }
        if(error.response.status ===500){
            alert('权限不足,请登录')
            return
        }
        if(error.response.status ===401){
            if(window.confirm('没有登陆,或权限不足,请登录')){
                window.location.href = '/login'
            }
            return
        }
    })
 }