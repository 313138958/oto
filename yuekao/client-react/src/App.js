import React from 'react';
import { BrowserRouter }  from 'react-router-dom'
import routerConfig from './router/router.config'
import Router from './router/router'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router routers={routerConfig}></Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
