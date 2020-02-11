import React from 'react'
import { Switch,Redirect,Route } from 'react-router-dom'
 function Router (props){
    return <Switch>
        {
            props.routers.map((item,key)=>{
                if(item.path === undefined){
                    return <Redirect key={key} from={item.from} to={item.to}/>
                }
                return <Route key ={key} path={item.path} render={mes =>{
                    return <item.component {...mes} routers={item.children}/>
                }}></Route>
            })

        }
    </Switch>
}

export default Router