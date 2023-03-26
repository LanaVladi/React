import React from 'react';
import './cardList.css';
import { data } from './../../data';
import { Card } from './../Card';

export class CardList extends React.Component {
  render(): JSX.Element {
    return (
      <>
        <div className="books-container">
          {data.map((book) => (
            <Card {...book} key={book.id} />
          ))}
        </div>
      </>
    );
  }
}
