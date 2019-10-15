import React from "react";

function Ingredients({ingredients}) {
  return (
    <ul className="ingredients">
      {ingredients.map((ingredient, i) => (
        <li key={i}>{i}}: {ingredient.name}</li>
      ))}
    </ul>
  );
}

export {Ingredients};
