import { Form } from '../components/form/Form';
import React from 'react';
import { Link } from 'react-router-dom';
import { SignInCard } from '../components/form/sign-in-card/SignInCard';
import { SignInFormFields } from 'types';
import './form-page.css';
import { useAppSelector } from '../hooks';
import { RootState } from '../store/store';

function FormPage() {
  const formCardsList = useAppSelector((state: RootState) => state.formCards.formCardsList);

  return (
    <>
      <Link to="/form"></Link>
      <h1>Form</h1>
      <Form />
      <h2>Cards</h2>
      <div className="form-cards-container">
        {formCardsList.map((card: SignInFormFields) => (
          <SignInCard key={card.avatar} signInCard={card} />
        ))}
      </div>
    </>
  );
}

export { FormPage };
