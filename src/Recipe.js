import React from "react";

function Recipe({ name, ingredients, steps }) {
  return (
    <section id={name.toLowerCase().replace(/ /g, "-")}>
      <h1>{name}</h1>
      <ul className="ingredients">
        {ingredients.map((ingredient, i) => (
          <li key={i}>{ingredient.name}</li>
        ))}
      </ul>
      <section className="instructions">
        <h2>Cooking XXInstructions</h2>
        {steps.map((step, i) => (
          <p key={i}>{i}: {step}</p>
        ))}
      </section>
    </section>
  );
}

export {Recipe};
