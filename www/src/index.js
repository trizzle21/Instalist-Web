'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import LandingPage from './LandingPage';
import registerServiceWorker from './registerServiceWorker';

import { HashRouter, Route, Switch } from 'react-router-dom'


const NotFound = () => (
  <h1>404.. This page is not found!</h1>)





class Root extends React.Component {
    render(){
        return(
            <HashRouter>
                <div>
                    <Route path="/" component={LandingPage}/>

                </div>
            </HashRouter>
        );
    }
}




ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
