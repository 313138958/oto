import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import request from './until/request'
import { BrowserRouter } from 'react-router-dom'
import Router from './router/Router'

React.Component.prototype.Api = request
ReactDOM.render(
    <BrowserRouter>
        <Router></Router>
    </BrowserRouter>, document.getElementById('root'));