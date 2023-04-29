import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <>
      <h1>This page not found!</h1>
      <Link className="go-home" to="/">
        Go Home
      </Link>
    </>
  );
}

export { NotFoundPage };
