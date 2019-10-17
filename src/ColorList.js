import React from 'react'
import {Color} from './Color';

function ColorList ({colors = []}) {
  return (
    <div>
      {colors.map(color => <Color key={color.id} {...color} />)}
    </div>
  )
}

export {ColorList};
