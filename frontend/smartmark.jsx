import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
    //for test
    console.log("Entry file found!");


    const root = document.getElementById('root)');
    const store = configureStore();
    ReactDOM.render(<Root store={store} />, root);
});