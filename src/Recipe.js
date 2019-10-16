import React from "react";
import {Instructions} from './Instructions';
import {Ingredients} from './Ingredients';

function Recipe({ name, ingredients, steps }) {
  return (
    <section id={name.toLowerCase().replace(/ /g, "-")}>
      <h1>{name}</h1>
      <Ingredients ingredients={ingredients} />
      <Instructions title="Goodie foodie!" steps={steps} />
    </section>
  );
}

export {Recipe};
