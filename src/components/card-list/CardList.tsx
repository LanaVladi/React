import React, { useState } from 'react';
import './cardList.css';
import { Card } from './../Card';
import { CardType, partialCardInfo } from 'types';
import { Modal } from '../modal/Modal';
import { getAPIDataById } from '../../api';
import { NotFound } from '../not-found/NotFound';
import { LoadingIndicator } from '../loading-indicator/LoadingIndicator';

export type CardListProps = {
  cards: partialCardInfo[];
  isActiveIndicator: boolean;
  isNotFoundError: boolean;
};

export function CardList({ cards, isActiveIndicator, isNotFoundError }: CardListProps) {
  const [activeModal, setActiveModal] = useState(false);
  const [openedCard, setOpenedCard] = useState<CardType>();
  const [activeIndicator, setActiveIndicator] = useState(false);

  const displayModal = (id: number) => async () => {
    setActiveModal(true);
    setActiveIndicator(true);
    const dataModalCard = await getAPIDataById(id);
    setOpenedCard(dataModalCard);
    setActiveIndicator(false);
  };

  return (
    <>
      <div className="cards-container ">
        {isNotFoundError ? (
          <NotFound />
        ) : isActiveIndicator ? (
          <LoadingIndicator />
        ) : (
          cards.map((card) => <Card card={card} key={card.id} onClick={displayModal} />)
        )}

        {activeModal && (
          <Modal
            displayIndicator={activeIndicator}
            setActiveModal={setActiveModal}
            openedCard={openedCard}
          />
        )}
      </div>
    </>
  );
}
