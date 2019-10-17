import React, { useState } from "react";
import {Recipe} from './Recipe';
import {Cat} from './App'
import {ColorList} from './ColorList';
import colorData from "./color-data.json";

function Menu({title, recipes}) {
  const [colors] = useState(colorData);
  return (
    <article>
      <header>
        <h1>{title}</h1>
      </header>
      <div className="recipes">
        <ColorList colors={colors} />
        {recipes.map((recipe, i) => (
          <Recipe key={i} {...recipe} />
        ))}
      </div>
      <Cat name = 'Fritz'/>
    </article>
  );
}

export {Menu};
