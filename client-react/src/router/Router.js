import React, { Component } from 'react'
import {Switch,Redirect,Route } from 'react-router-dom'
import Login from '../view/Login'
import Home from '../view/home/Home'
class Router extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Redirect from="/" to="/login" exact/>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/home" component={Home}></Route>
                </Switch>
            </div>
        )
    }
}
export default Router