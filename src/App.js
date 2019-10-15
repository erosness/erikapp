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

const data = [
  {
    name: "Baked Salmon",
    ingredients: [
      { name: "Salmon", amount: 1, measurement: "l lb" },
      { name: "Pine Nuts", amount: 1, measurement: "cup" },
      { name: "Butter Lettuce", amount: 2, measurement: "cups" },
      { name: "Yellow Squash", amount: 1, measurement: "med" },
      { name: "Olive Oil", amount: 0.5, measurement: "cup" },
      { name: "Garlic", amount: 3, measurement: "cloves" }
    ],
    steps: [
      "Preheat the oven to 350 degrees.",
      "Spread the olive oil around a glass baking dish.",
      "Add the yellow squash and place in the oven for 30 mins.",
      "Add the salmon, garlic, and pine nuts to the dish.",
      "Bake for 15 minutes.",
      "Remove from oven. Add the lettuce and serve."
    ]
  },
  {
    name: "Fish Tacos",
    ingredients: [
      { name: "Whitefish", amount: 1, measurement: "l lb" },
      { name: "Cheese", amount: 1, measurement: "cup" },
      { name: "Iceberg Lettuce", amount: 2, measurement: "cups" },
      { name: "Tomatoes", amount: 2, measurement: "large" },
      { name: "Tortillas", amount: 3, measurement: "med" }
    ],
    steps: [
      "Cook the fish on the grill until cooked through.",
      "Place the fish on the 3 tortillas.",
      "Top them with lettuce, tomatoes, and cheese."
    ]
  }
];




function Cat({ name }) {
  return (
    <React.Fragment>
      <h1>The cat's name is {name}</h1>
      <p>He is good!</p>
    </React.Fragment>);
}

export { data, Cat};
