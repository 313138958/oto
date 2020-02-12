import React, { Component } from 'react'
import { DatePicker, Button } from 'antd';
class Add extends Component {
    state = {
        deadline: null,
        title: '',
        isRadio: 1,
        description: "",
        anonymous: 2,
        option: []

    }
    onChange(date, dateString) {
        this.setState({
            deadline: new Date(dateString).getTime()
        })
        console.log(this.state.deadline)
    }
    handleChange(key, e) {
        this.setState({
            [key]: e.target.value
        })
    }
    handleClick = () => {
        console.log(this.state)
    }
    render() {
        const { title, isRadio, description, anonymous, option } = this.state
        return (
            <div>
                <div>标题: <input value={title} type="text" onChange={this.handleChange.bind(this, 'title')} /></div>
                <div>描述: <input value={description} type="text" onChange={this.handleChange.bind(this, 'description')} /> </div>
                <div> 单/多选:
                    <select value={isRadio} onChange={this.handleChange.bind(this, 'isRadio')}>
                        <option value='1'>单选</option>
                        <option value='2'>多选</option>
                    </select>
                </div>
                <div>是否匿名:
                <select value={anonymous} onChange={this.handleChange.bind(this, 'anonymous')}>
                        <option value='1'>是</option>
                        <option value='2'>否</option>
                    </select>
                </div>
                <div> 选项:
                <div>
                {
                    option.map(item=><div key={item.id}>{item.value}<span onClick={()=>this.deleteOption(item.id)}>删除</span></div>)
                }
            </div>
            <div><input ref="optionVal" type="text" /> <span onClick={this.addOption}>添加选项</span></div>
                </div>
                <div>截止日期:<DatePicker onChange={this.onChange.bind(this)} showTime={true} /></div>
                <div> <Button type="primary" onClick={this.handleClick.bind(this)}>提交</Button></div>
            </div>

        )
    }
    //添加选项
    addOption=()=>{
        let {option} = this.state
        option.push({
            id:new Date().getTime()+option.length,
            value:this.refs.optionVal.value
        })
        this.setState({option:[...option]})
    }

    //删除选项
    deleteOption = id => {
        let {option} = this.state;
        let index = option.findIndex(item=>item.id === id);
        option.splice(index,1);
        this.setState({option:[...option]});
    }
}
export default Add