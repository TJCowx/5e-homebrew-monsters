import React from 'react';
import { Provider } from "react-redux";
import ReactDOM from 'react-dom';
import App from './App';
import { makeStore } from './store/store';

ReactDOM.render(<Provider store={makeStore()}><App /></Provider>, document.getElementById('output'));
