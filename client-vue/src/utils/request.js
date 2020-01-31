import axios from 'axios'

export default (method,url,data=[])=>{
    let configReq = {}
    let type = method==='get'?'parmas':'data'
    configReq.method = method
    configReq.url = url 
    configReq[type]=data
    configReq.headers ={
        token : localStorage.getItem('token')
    }
    return axios(configReq).catch(error=>{
        if(error.response.status ===404){
            alert('接口不存在')
            return
        }
        if(error.response.status ===500){
            alert('服务器报错')
            return
        }
    })
}