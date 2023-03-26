import React from 'react';
import { SignInCardPropsType } from './../../../types';

class SignInCard extends React.Component<SignInCardPropsType> {
  render(): React.ReactNode {
    const { username, birthday, country, avatar } = this.props;
    return (
      <>
        <div className="sign-in-card">
          <img className="img-container__img" src={avatar} alt={username} />
          <div className="sign-in-card-details">
            <h5 className="username">{username}</h5>
            <p className="birthday">{birthday}</p>
            <p className="country">{country}</p>
          </div>
        </div>
      </>
    );
  }
}

export default { SignInCard };
