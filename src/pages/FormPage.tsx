import { Form } from '../components/form/Form';
import React from 'react';
import { Link } from 'react-router-dom';
import { SignInCard } from '../components/form/sign-in-card/SignInCard';
import { SignInFormFields } from 'types';
import './form-page.css';

type cardsState = {
  signInCards: SignInFormFields[];
};
class FormPage extends React.Component<unknown, cardsState> {
  constructor(props: unknown) {
    super(props);

    this.state = {
      signInCards: [],
    };
  }

  setSignInCards = (signInCard: SignInFormFields) => {
    this.setState((prevState) => {
      return { signInCards: [...prevState.signInCards, signInCard] };
    });
  };

  render(): React.ReactNode {
    const { signInCards } = this.state;
    return (
      <>
        <Link to="/form"></Link>

        <h1>Form</h1>
        <Form setSignInCards={this.setSignInCards} />

        <h2>Cards</h2>
        <div className="cards-container">
          {signInCards.map((card: SignInFormFields) => (
            <SignInCard key={card.username} signInCard={card} />
          ))}
        </div>
      </>
    );
  }
}

export default FormPage;
