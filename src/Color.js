import React, { useState } from "react";
import colorData from "./color-data.json";

function Color() {
  const [colors] = useState(colorData);
  return(
    <><p>Text fra color</p></>
  );
}

export {Color};
