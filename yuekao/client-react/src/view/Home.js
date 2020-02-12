import React, { Component } from 'react'
import { connect } from 'react-redux'
class Home extends Component {
    state ={
        initIndex:0,
        callback:item => true,
        tablist:[
            {
                name:'全部',
                callback:item => true
            },
            {
                name:'已结束',
                callback:item => item.tim <= new Date().getTime()
            },
            {
                name:'正在进行',
                callback:item =>item.tim > new Date().getTime()
            }
        ]
    }
    handleClick(index,callback){
        this.setState({
            initIndex:index,
            callback
        })
    }
    render() {
        const { tablist ,initIndex,callback} = this.state 
        const { list } = this.props
        return (
            <div>
                <div onClick={()=>this.props.history.push('/add')}>
                    发起投票
                </div>
                {
                    tablist.map((item,index)=><span key={index} onClick={this.handleClick.bind(this,index,item.callback)} className={initIndex===index?'active':null}>{item.name}</span>)
                }
                <div>
                    {
                        list.filter(callback).map(item=>{
                            return <div key={item.id}>
                                <p> {item.id} </p>
                                <p> {item.title} </p>
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
    componentDidMount (){
        this.props.initData(this)
    }
}

let a = store =>{
    let { list } = store
    return {
        list
    }
}

let b = dispatch=>{
    return {
        async initData(that){
            let res = await that.Api('get','/getlist')
            if(res.data.code === 1 ){
                dispatch({type:'CHANGE_LIST',list:res.data.result})
                return
            }
            alert(res.data.msg)
        }
    }

}

export default connect(a,b)(Home)