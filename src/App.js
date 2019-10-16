// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function Cat({ name }) {
  return (
    <React.Fragment>
      <h1>The cat's name is {name}</h1>
      <p>He is good!</p>
    </React.Fragment>);
}

export {Cat};
