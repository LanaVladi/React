import React from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <h1>About us</h1>
        <Link to="/about"></Link>
      </>
    );
  }
}

export default About;
