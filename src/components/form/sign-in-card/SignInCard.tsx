import React from 'react';
import { SignInFormFields } from './../../../types';
import './sign-in-card.css';

type SignInCardProps = {
  signInCard: SignInFormFields;
};

function SignInCard({ signInCard }: SignInCardProps): JSX.Element {
  const { username, birthday, country, avatar, gender, remember } = signInCard;
  return (
    <>
      <div className="sign-in-card">
        <img
          className="avatar-container"
          src={URL.createObjectURL(avatar[0] as unknown as Blob)}
          alt={username}
        />
        <div className="sign-in-card-details">
          <p className="username">
            <span style={{ fontWeight: 'bold' }}>Name:</span> {username}
          </p>
          <p className="birthday">
            <span style={{ fontWeight: 'bold' }}>Birthday:</span>{' '}
            {new Date(birthday).toISOString().slice(0, 10)}
          </p>
          <p className="gender">
            <span style={{ fontWeight: 'bold' }}>Gender: </span>
            {gender}
          </p>
          <p className="country">
            <span style={{ fontWeight: 'bold' }}>Country: </span>
            {country}
          </p>
          <p className="remember">
            <span style={{ fontWeight: 'bold' }}>Remember me: </span>
            {JSON.stringify(remember)}
          </p>
        </div>
      </div>
    </>
  );
}

export { SignInCard };
