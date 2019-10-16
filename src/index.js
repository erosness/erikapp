import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Rate} from './Rate';
import {Menu} from './Menu';
import data from './recipes.json';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Rate/>, document.getElementById("root"));
// ReactDOM.render(<Menu recipes={data} title="Meny" />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
