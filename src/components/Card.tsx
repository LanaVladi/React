import React from 'react';
import { DataPropsType } from 'types';

export class Card extends React.Component<DataPropsType> {
  render(): JSX.Element {
    const {
      bookName,
      author,
      price,
      publishingHouse,
      quantityInStock,
      image,
      publicationYear,
      isPopular,
    } = this.props;
    return (
      <>
        <div className="books-card">
          <img className="img-container__img" src={image} alt={bookName} />
          <div className="books-card-details">
            <h5 className="book-name">{bookName}</h5>
            <p className="book-author">{author}</p>
            <p className="price">{price} руб.</p>
            <p className="publishing-house"> {'Издательство ' + publishingHouse}</p>
            <p className="publication-date">{'Дата издания ' + publicationYear}</p>
            <p className="quantity-in-stock"> {'Количество ' + quantityInStock}</p>
            <p className="is-popular">{'Популярная ' + isPopular}</p>
          </div>
          <button className="buy-btn">{'Купить'}</button>
        </div>
      </>
    );
  }
}
