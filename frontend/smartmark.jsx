import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'

//test imports

import * as SessionApiUtil from './util/session_api_util'

//end test imports

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();
    
    //tests
    console.log("Entry file found!");
    window.login = SessionApiUtil.login;
    window.logout = SessionApiUtil.logout;
    window.signup = SessionApiUtil.signup;
    let user = { username: 'potato', password: 'password', email: 'email'}
    window.user = user;
    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    //end tests
    
    ReactDOM.render(<Root store={store} />, root);
});