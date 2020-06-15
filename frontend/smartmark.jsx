import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'

//test imports
import * as CommentApiUtil from './util/comment_api_util'
import * as UserApiUtil from './util/user_api_util'
//end test imports

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    //tests
    window.store = store;
    window.getState = store.getState;
    window.fetchUser = UserApiUtil.fetchUser
    window.fetchUsers = UserApiUtil.fetchUsers
    window.fetchComments = CommentApiUtil.fetchComments
    window.fetchComment = CommentApiUtil.fetchComment
    //end tests
    

    ReactDOM.render(<Root store={store} />, root);
});