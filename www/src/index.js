'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Router, Route } from 'react-router';


const NotFound = () => (
  <h1>404.. This page is not found!</h1>)


class Root extends React.Component {
    render(){
        return(
            <Router>
                <Route exact path="/" component={App}/>

            </Router>

        );
    }
}




ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
