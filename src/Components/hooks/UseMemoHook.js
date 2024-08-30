import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';

export default function UseMemoHook() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);
  let count = 0;
  useEffect(() => {
    console.log('fetch data' + count++);
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        console.log(response);
        setData(response.data);
      }, []);
  });

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longesName = '';
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longesName.length) {
        longesName = currentName;
      }
    }

    console.log('This was computed');
    return longesName;
  };
  const getLongesName = useMemo(() => findLongestName(data), [data]);
  return (
    <div>
      {getLongesName}
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        click me
      </button>
      {toggle && 'Toggle'}
    </div>
  );
}
