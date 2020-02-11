import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import request from './utils/request'
React.Component.prototype.Api = request
ReactDOM.render(<App />, document.getElementById('root'));

