import React, { useState } from 'react';
import './cardList.css';
import { Card } from './../Card';
import { CardType, partialCardInfo } from 'types';
import { Modal } from '../../components/modal-window/Modal';
import { getAPIDataById } from '../../api';

export type CardListProps = {
  cards: partialCardInfo[];
};

export function CardList({ cards }: CardListProps) {
  const [activeModal, setActiveModal] = useState(false);
  const [openedCard, setOpenedCard] = useState<CardType>();

  const displayModal = (id: number) => async () => {
    setActiveModal(true);
    const dataModalCard = await getAPIDataById(id);
    setOpenedCard(dataModalCard);
  };

  return (
    <>
      <div className="cards-container ">
        {cards.map((card) => (
          <Card card={card} key={card.name} onClick={displayModal} />
        ))}
        {activeModal && <Modal setActiveModal={setActiveModal} openedCard={openedCard} />}
      </div>
    </>
  );
}
