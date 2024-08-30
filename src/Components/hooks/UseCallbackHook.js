import React, { useCallback, useMemo, useState } from 'react';
import Child from './Child';
export default function UseCallbackHook() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState('Yo, pls sub to the chanel!');

  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );
  return (
    <div>
      <Child returnComment={returnComment} />
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      {toggle && <h1>Toggle</h1>}
    </div>
  );
}
