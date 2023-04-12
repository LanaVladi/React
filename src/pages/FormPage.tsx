import { Form } from '../components/form/Form';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SignInCard } from '../components/form/sign-in-card/SignInCard';
import { SignInFormFields } from 'types';
import './form-page.css';

function FormPage() {
  const [signInCardsList, setSignInCardsList] = useState<SignInFormFields[]>([]);

  const addNewCard = (card: SignInFormFields) => {
    setSignInCardsList((prevValue) => {
      return [...prevValue, card];
    });
  };

  return (
    <>
      <Link to="/form"></Link>

      <h1>Form</h1>
      <Form addNewCard={addNewCard} />

      <h2>Cards</h2>
      <div className="cards-container">
        {signInCardsList.map((card: SignInFormFields) => (
          <SignInCard key={card.avatar} signInCard={card} />
        ))}
      </div>
    </>
  );
}

export { FormPage };
