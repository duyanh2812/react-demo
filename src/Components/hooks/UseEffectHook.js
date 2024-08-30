import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function UseEffectHook() {
  const [state, setState] = useState('');
  const [count, setCount] = useState(0);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        setState(response.data[0].email);
        console.log('API Call');
      });
  }, []);
  return (
    <div>
      <h1>
        Hello {state}, {count}
      </h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}
