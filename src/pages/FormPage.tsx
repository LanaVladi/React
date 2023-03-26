import { Form } from '../components/form/Form';
import React from 'react';
import { Link } from 'react-router-dom';

class FormPage extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <h1>Form</h1>
        <Form />
        <Link to="/form"></Link>
      </>
    );
  }
}

export default FormPage;
