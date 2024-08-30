import React from 'react';
import { useState } from 'react';

export default function UseStateHook() {
  const [state, setState] = useState({
    count: 0,
    inputValue: '',
  });

  const setInputVal = (event) => {
    setState({
      count: state.count,
      inputValue: event.target.value,
    });
  };

  const incrementCount = () => {
    setState({
      count: state.count + 1,
      inputValue: state.inputValue,
    });
  };

  return (
    <div>
      <button onClick={incrementCount}>CLick me to incre {state.count}</button>
      <input placeholder="Input something" onChange={setInputVal} />
      {state.inputValue}
    </div>
  );
}
