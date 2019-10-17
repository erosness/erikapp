import React from "react";

function Instructions ({ title, steps }) {
  return (
    <section className="instructions">
      <h3>Cooking Instructions</h3>
      {steps.map((step, i) => (
        <p key={i}>{i}: {step}</p>
      ))}
    </section>
  );
}

export {Instructions};
