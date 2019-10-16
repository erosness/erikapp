import React from "react";
import {Instructions} from './Instructions';
import {Ingredients} from './Ingredients';
import {Rate} from './Rate';

function Recipe({ name, ingredients, steps }) {
  return (
    <section id={name.toLowerCase().replace(/ /g, "-")}>
      <h3>{name}</h3>
      <Rate totalStars = {6} />
      <Ingredients ingredients={ingredients} />
      <Instructions title="Goodie foodie!" steps={steps} />
    </section>
  );
}

export {Recipe};
