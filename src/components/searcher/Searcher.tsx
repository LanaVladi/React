import React, { useEffect, useRef, useState } from 'react';
import './searcher.css';

type SearcherProps = {
  startSearch: (request: string) => void;
};

export function Searcher({ startSearch }: SearcherProps) {
  const [inputText, setInputText] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const onChangeSearcher = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  useEffect(() => {
    const saveRequest = localStorage.getItem('request')
      ? localStorage.getItem('request')
      : setInputText(inputText);
    setInputText(saveRequest || '');
    startSearch(saveRequest || '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmitForm = async (event: React.FormEvent) => {
    event.preventDefault();
    localStorage.setItem('request', inputText || '');
    startSearch(inputText);
  };

  return (
    <>
      <form className="form-input" onSubmit={handleSubmitForm}>
        <input
          className="searcher-input"
          type={'text'}
          placeholder="Search by full name"
          value={inputText}
          onChange={onChangeSearcher}
          ref={inputRef}
        ></input>
        <button className="btn-search">Search</button>
      </form>
    </>
  );
}
