import React, { useEffect, useRef, useState } from 'react';
import './searcher.css';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { RootState } from '../../store/store';
import { setSearchText } from '../../store/searchSlice';
import { useGetDataByNameQuery } from '../../store/APIDataSlice';
import { setMainCardsList } from '../../store/mainCardsSlice';

export function Searcher() {
  const inputTextFromStore = useAppSelector((state: RootState) => state.searcher.searchText);
  const [inputText, setInputText] = useState<string>(inputTextFromStore);
  const inputRef = useRef<string>('');

  const { data } = useGetDataByNameQuery(inputTextFromStore);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setMainCardsList(data.results));
    }
  }, [data, dispatch]);

  useEffect(() => {
    inputRef.current = inputText;
  }, [inputText]);

  const onChangeSearcher = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleSubmitForm = async (event: React.FormEvent) => {
    event.preventDefault();
    if (inputTextFromStore !== inputRef.current) {
      dispatch(setSearchText(inputRef.current));
    }
  };

  return (
    <>
      <form className="form-input" data-testid="form" onSubmit={handleSubmitForm}>
        <input
          className="searcher-input"
          type={'text'}
          placeholder="Search by name"
          value={inputText}
          onChange={onChangeSearcher}
        ></input>
        <button className="btn-search">Search</button>
      </form>
    </>
  );
}
