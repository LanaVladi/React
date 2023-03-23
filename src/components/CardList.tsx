import React from 'react';
import { data } from './../data';
import { Card } from './Card';
import '../components/cardList.css';

export class CardList extends React.Component {
  render(): React.ReactNode {
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
