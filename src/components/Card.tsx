import React from 'react';
import { partialCardInfo } from 'types';

export type CardProps = {
  card: partialCardInfo;
  onClick: (request: number) => () => void;
};

export function Card({ card, onClick }: CardProps) {
  const { id, name, image } = card;
  return (
    <>
      <div className="card" onClick={onClick(id)}>
        <img className="img-container__img" src={image} alt={name} />
        <div className="card-details">
          <h5 className="card-name">{name}</h5>
        </div>
      </div>
    </>
  );
}
