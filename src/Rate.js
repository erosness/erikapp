// import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { FaStar } from 'react-icons/fa';
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';


const Star = ({ selected = false, onSelect = f => f }) => (
  selected ?
  <FiThumbsUp color={"red"} onClick={onSelect} /> :
  <FiThumbsDown color={"grey"} onClick={onSelect} />
);

const createArray = length => [...Array(length)];

function StarRating({ totalStars = 5 }) {
  return createArray(totalStars).map((n, i) => <Star key={i} />);
}

function Rate({ totalStars = 12, name="Mons" }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <>
      <h1>The cat's name is {name}</h1>
      <FiThumbsUp class="more"/>
      {createArray(totalStars).map((n,i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <FiThumbsDown class="less" onClick={console.log("Down-click")}/>
      <p>He is good and have {selectedStars} out of {totalStars} stars.</p>
    </>);
}

export {Rate};
