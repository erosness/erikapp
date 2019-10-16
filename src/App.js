// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function callout() {
  const string = "Restaurants in Hanalei in operation";
  const urlFriendly = string => string.split(" ");
  const reversex = array => array.reverse();
  const connect = array => {
    if (array.length === 1) {
      return array[0];
    } else {
      return (array[0] + "-" + connect(array.slice(1)));
    }
  }


  console.log(connect(reversex(reversex(urlFriendly(string))))); // "Restaurants-in-Hanalei"
  console.log(string);

}

const headerLine = React.createElement("h1", { id: "recipe-0" }, "Baked Salmon");
console.log(headerLine);


function Cat({ name }) {
  return (
    <React.Fragment>
      <h1>The cat's name is {name}</h1>
      <p>He is good!</p>
    </React.Fragment>);
}

export {Cat};
