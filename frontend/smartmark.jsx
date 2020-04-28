import React from 'react';
import ReactDOM from 'react-dom';

//test imports

import * as SessionApiUtil from './util/session_api_util'

//end test imports

document.addEventListener('DOMContentLoaded', () => {

    //tests
    console.log("Entry file found!");
    window.login = SessionApiUtil.login;
    window.logout = SessionApiUtil.logout;
    window.signup = SessionApiUtil.signup;
    let user = { username: 'potato', password: 'password', email: 'email'}
    window.user = user;
    //end tests

    const root = document.getElementById('root)');
    const store = configureStore();
    ReactDOM.render(<Root store={store} />, root);
});