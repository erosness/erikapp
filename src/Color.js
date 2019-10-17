import React, { useState } from "react";
import {Rate} from './Rate'


function Color({title, color, rating}) {
  return(
    <section>
      <div style={{ height: 50, backgroundColor: color, fill: color}}>
        <h1>{title}</h1>
        <Rate totalStars={5} rate={rating}/>
      </div>
    </section>
  );
}

export {Color};
