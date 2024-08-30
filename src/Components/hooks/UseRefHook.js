import React, { useRef } from 'react';

export default function UseRefHook() {
  const inputRef = useRef(null);
  const onClick = () => {
    console.log(inputRef.current.value);
    inputRef.current.focus();
    inputRef.current.value = '';
  };
  return (
    <div>
      <h1>Pedro</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
}
