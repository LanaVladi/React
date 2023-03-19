import React from 'react';
import { DataPropsType } from 'types';
import './searcher.css';

interface StateType {
  textInput: string;
}

class Searcher extends React.Component<DataPropsType, StateType> {
  textInput = React.createRef();
  state = { textInput: localStorage.getItem('request') || '' };

  componentWillUnmount(): void {
    localStorage.setItem('request', this.state.textInput);
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    this.setState({ textInput: event.target.value });
  };

  render(): React.ReactNode {
    return (
      <>
        <input
          className="searcher-input"
          type={'text'}
          placeholder="Search by author"
          value={this.state.textInput}
          onChange={this.handleChange}
        ></input>
        <button className="btn-search">Search</button>
      </>
    );
  }
}

export { Searcher };
