import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { data, Cat} from './App';
import {Menu} from './Menu';

import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<Cat name="Jungle" />, document.getElementById("root"));
ReactDOM.render(<Menu recipes={data} title="Meny" />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
