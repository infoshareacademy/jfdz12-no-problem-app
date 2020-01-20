import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB1hXtUkKyvnejEmMe9VQjb_sj67zZf-Ng",
    authDomain: "aleciachaapp.firebaseapp.com",
    databaseURL: "https://aleciachaapp.firebaseio.com",
    projectId: "aleciachaapp",
    storageBucket: "aleciachaapp.appspot.com",
    messagingSenderId: "946106450467",
    appId: "1:946106450467:web:e4b62a740d70364f02a796"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
