import React, { useState } from 'react';
import './card-list.css';
import { Card } from './../Card';
import { CardType } from 'types';
import { Modal } from '../modal/Modal';
import { NotFound } from '../not-found/NotFound';
import { LoadingIndicator } from '../loading-indicator/LoadingIndicator';
import { useAppSelector } from '../../hooks';
import { RootState } from '../../store/store';
import { useGetDataByNameQuery } from '../../store/APIDataSlice';

export function CardList() {
  const [activeModal, setActiveModal] = useState(false);
  const [openedCard, setOpenedCard] = useState<CardType>();

  const mainCardsList = useAppSelector((state: RootState) => state.mainCards.mainCardsList);
  const inputText = useAppSelector((state: RootState) => state.searcher.searchText);
  const { data, isError, isFetching } = useGetDataByNameQuery(inputText || '');

  const displayModal = (id: number) => () => {
    const dataModalCard = mainCardsList.filter((card) => card.id === id);
    setActiveModal(true);
    setOpenedCard(dataModalCard[0]);
  };

  return (
    <>
      <div className="cards-container">
        {isError ? (
          <NotFound />
        ) : data?.results.length && isFetching ? (
          <LoadingIndicator />
        ) : (
          data?.results.map((card: CardType) => (
            <Card card={card} key={card.id} onClick={displayModal} />
          ))
        )}

        {activeModal && <Modal setActiveModal={setActiveModal} openedCard={openedCard} />}
      </div>
    </>
  );
}
