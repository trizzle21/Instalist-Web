'use strict';
import ReactDom from 'react-dom';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';

import landing from "./components/landing.jsx";


injectTapEventPlugin();

const middleware = [ thunk ]

const NotFound = () => (
  <h1>404.. This page is not found!</h1>)


const store = createStore(reducer, applyMiddleware(...middleware));


class Root extends React.Component {
    render(){
        return(
            <Provider store={store}>
                <Router>
                    <Route path='/' component={landing} />
                </Router>
            </Provider> 

        );
    }
}



ReactDom.render(<Root />, document.getElementById('app'));
