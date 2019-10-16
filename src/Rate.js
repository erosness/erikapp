// import logo from './logo.svg';
import './Rate.css';

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { FaStar } from 'react-icons/fa';
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';


const Star = ({ selected = false, onSelect = f => f }) => (
  selected ?
  <FaStar color={"red"} onClick={onSelect} /> :
  <FaStar color={"grey"} onClick={onSelect} />
);


const createArray = length => [...Array(length)];

function StarRating({ totalStars = 5 }) {
  return createArray(totalStars).map((n, i) => <Star key={i} />);
}

function Rate({ totalStars = 12,  }) {
  const [selectedStars, setSelectedStars] = useState(0);

  const filterSetSelectedStars = (rate) => {
    setSelectedStars(Math.max ( Math.min ( rate, totalStars ) , 0 ));
  }

  const MoreRating = ({ Icon = FiThumbsUp, onSelect = f => f }) => (
    <Icon
      class="ratemore"
      onClick={() => filterSetSelectedStars(selectedStars + 1)}
    />
  );

  const LessRating = ({ Icon = FiThumbsDown, onSelect = f => f }) => (
    <Icon
      class="rateless"
      onClick={() => filterSetSelectedStars(selectedStars - 1)}
    />
  );

  return (
    <div class="ratearea">
      <LessRating/>
      {createArray(totalStars).map((n,i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <MoreRating/>
      <p>Rate is {selectedStars} out of {totalStars} stars.</p>
    </div>);
}

export {Rate};
