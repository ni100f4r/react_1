import React, { useState, useEffect } from 'react';
import style from './testHooks.module.css'

function HookExample() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className={style.testHooks}>
      <h2>useEffect</h2>
      <hr></hr>
      <p>You clicked {count} times</p>
      <button className={style.btn_style} onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}


export default HookExample;