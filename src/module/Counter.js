import React from 'react';

export default function Counter ({value, onIncrease, index}) {

  const inc = ()=>{
    onIncrease(index);
  }

  return <div>
    <h1>Count: {value} </h1>
    <button onClick= {inc}>increase</button>
  </div>

}
