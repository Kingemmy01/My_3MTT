import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const limit = 20; //count stop at 20

  //create formula to increase count until 20
  const increase = () => {
    if (count < limit) setCount(count + 1);
  };

  // create formula to decrease count
  const decrease = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className='counter-container'>
      <h2>Welcome to my Simple Counter App</h2>
      <p className='count'> Count: { count }</p>
      { count >= limit && <p className='Limit-notificatiion'>You've reached the limit</p>}
      
      <div className='buttons'>
        <button onClick={increase} className='btn increase'>Increase</button>
        <button onClick={decrease} className='btn decrease'>Decrease</button>
      </div>
    </div>
  )
};

export default Counter;
