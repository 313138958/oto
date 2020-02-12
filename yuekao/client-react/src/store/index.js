import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

let initstate = {
    list:[]
}
let reducer = (state = initstate,options) => {
    if(options.type === "CHANGE_LIST"){
        state.list = [...options.list]
    }
    return {...state}
}

let store = createStore(reducer,applyMiddleware(thunk))

export default store
