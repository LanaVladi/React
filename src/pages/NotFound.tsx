import React from 'react';
import { Link } from 'react-router-dom';

class NotFound extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <h1>This page not found!</h1>
        <Link to="/">Go Home</Link>
      </>
    );
  }
}

export default NotFound;
