import React from "react";

function Instructions ({ title, steps }) {
  return (
    <section className="instructions">
      <h2>Cooking XXInstructions</h2>
      {steps.map((step, i) => (
        <p key={i}>{i}: {step}</p>
      ))}
    </section>
  );
}

export {Instructions};
