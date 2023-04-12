import React, { Suspense, useState } from 'react';
import './cardList.css';
import { Card } from './../Card';
import { CardType, partialCardInfo } from 'types';
import { Modal } from '../../components/modal-window/Modal';
import { getAPIDataById } from '../../api';

export type CardListProps = {
  cards: partialCardInfo[];
  isActiveIndicator: boolean;
};

export function CardList({ cards, isActiveIndicator }: CardListProps) {
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
        {isActiveIndicator ? (
          <Suspense
            fallback={<div className="loading-indicator">Data is loading...</div>}
          ></Suspense>
        ) : cards.length === 0 ? (
          <div className="card-not-found">CARD NOT FOUND! PLEASE TRY AGAIN!</div>
        ) : (
          cards.map((card) => <Card card={card} key={card.name} onClick={displayModal} />)
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
