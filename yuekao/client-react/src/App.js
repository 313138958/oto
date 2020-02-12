import React from 'react';
import { BrowserRouter }  from 'react-router-dom'
import routerConfig from './router/router.config'
import Router from './router/router'
import { Provider } from 'react-redux'
import store from './store'
function App() {
  return <Provider store={store}>
      <BrowserRouter>
        <Router routers={routerConfig}></Router>
      </BrowserRouter>
    </Provider>

}

export default App;
