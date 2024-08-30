import React, { useEffect, useLayoutEffect, useRef } from 'react';

export default function UseLayoutEffectHook() {
  const inputRef = useRef(null);
  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  });

  useEffect(() => {
    inputRef.current.value = 'HELLO';
  });
  return (
    <div>
      <input ref={inputRef} value="PEDRO" style={{ width: 400, height: 200 }} />
    </div>
  );
}
