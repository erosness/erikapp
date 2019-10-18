import React, { useState } from "react";
import {Rate} from './Rate'


function Color({title, color, rating}) {
  return(
    <section>
      <div className="ratearea" style={{backgroundColor: color}}>
        <p>{title}</p>
        <Rate totalStars={5} rate={rating}/>
      </div>
    </section>
  );
}

export {Color};
