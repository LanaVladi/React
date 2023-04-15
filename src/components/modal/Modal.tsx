import React from 'react';
import { CardType } from 'types';
import './modal.css';

export type modalCardProps = {
  openedCard: CardType | undefined;
  setActiveModal: (status: boolean) => void;
  displayIndicator: boolean;
};

function Modal({ openedCard, setActiveModal, displayIndicator }: modalCardProps) {
  const closeModal = () => {
    setActiveModal(false);
  };

  return (
    <>
      <div className="modal-overlay" onClick={closeModal}></div>
      <div className="modal-wrapper">
        <div className="modal">
          <button className="modal-close-btn" onClick={closeModal}>
            X
          </button>
          {displayIndicator ? (
            <div className="loading-indicator">Data is loading...</div>
          ) : openedCard ? (
            <div className="modal-content">
              <img className="modal-img-container" src={openedCard?.image} alt={openedCard?.name} />
              <div className="modal-card-details">
                <h5 className="modal-card-name">{openedCard?.name}</h5>
                <p className="modal-card-species">{`Species: ` + openedCard?.species}</p>
                <p className="modal-card-gender">{`Gender: ` + openedCard?.gender}</p>
                <p className="modal-card-status">{`Status: ` + openedCard?.status}</p>
              </div>
            </div>
          ) : (
            <div className="card-not-found">CARD NOT FOUND! PLEASE TRY AGAIN!</div>
          )}
        </div>
      </div>
    </>
  );
}

export { Modal };
