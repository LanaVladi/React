import React, { useEffect, useState } from 'react';
import './searcher.css';

function Searcher() {
  const [inputText, setInputText] = useState<string>(localStorage.getItem('request') || '');
  const inputValueRef = React.useRef<string>();

  useEffect(() => {
    inputValueRef.current = inputText;
  }, [inputText]);

  useEffect(() => {
    return () => {
      localStorage.setItem('request', inputValueRef.current || '');
    };
  }, []);

  return (
    <>
      <input
        className="searcher-input"
        type={'text'}
        placeholder="Search by author"
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
      ></input>
      <button className="btn-search">Search</button>
    </>
  );
}

export { Searcher };
