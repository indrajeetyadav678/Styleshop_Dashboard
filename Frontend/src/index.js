import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import Store from './contoller/Store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard_App from "./Dashboard/Dashboard_App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={Store}>
        <App />
    </Provider>
);

const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(
        <Dashboard_App />
);

