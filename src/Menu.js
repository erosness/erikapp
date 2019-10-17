import React from "react";
import {Recipe} from './Recipe';
import {Cat} from './App'
import {Color} from './Color';

function Menu({title, recipes}) {
  return (
    <article>
      <header>
        <h1>{title}</h1>
      </header>
      <div className="recipes">
        <Color/>
        {recipes.map((recipe, i) => (
          <Recipe key={i} {...recipe} />
        ))}
      </div>
      <Cat name = 'Fritz'/>
    </article>
  );
}

export {Menu};
