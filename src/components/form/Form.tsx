import React from 'react';
import { SignInFormFields } from 'types';
import './form.css';

type FormFields = {
  username: HTMLInputElement;
  birthday: HTMLInputElement;
  remember: HTMLInputElement;
  country: HTMLSelectElement;
};

class Form extends React.Component {
  textInputName: React.RefObject<HTMLInputElement>;
  dateInputBirthday: React.RefObject<HTMLInputElement>;
  dropDownList: React.RefObject<HTMLSelectElement>;
  fileInput: React.RefObject<HTMLInputElement>;
  constructor(props: SignInFormFields & FormFields) {
    super(props);
    this.textInputName = React.createRef();
    this.dateInputBirthday = React.createRef();
    this.dropDownList = React.createRef();
    this.fileInput = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement & FormFields>) => {
    console.log(`A name was submitted: `);
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log('formData :', formData);
  };

  render(): React.ReactNode {
    return (
      <>
        <form className="sign-in-form" onSubmit={this.handleSubmit}>
          <h1 className="sign-in-title">Sign in</h1>
          <label className="form-label">
            Name:
            <input
              className="form-input-sign-in name-input"
              type={'text'}
              name="username"
              placeholder="Enter your name"
              ref={this.textInputName}
              required
            />
          </label>

          <label className="form-label">
            Birthday:
            <input
              className="form-input-sign-in date-input"
              type={'date'}
              name="birthday"
              placeholder="Enter your date of birth"
              ref={this.dateInputBirthday}
              required
            />
          </label>

          <label className="form-label">
            Remember me:
            <input
              className="form-input-sign-in checkbox-input"
              type={'checkbox'}
              name="remember"
              ref={this.dateInputBirthday}
            />
          </label>

          <div>
            <label className="form-label">
              Choose a country:
              <select
                name="country"
                className="form-input-sign-in"
                id="countries"
                ref={this.dropDownList}
              >
                <option value={'Uzbekistan'}>Uzbekistan</option>
                <option value={'Belarus'}>Belarus</option>
                <option value={'Japan'}>Japan</option>
              </select>
            </label>
          </div>

          <label className="form-label">
            Add image:
            <input
              name="avatar"
              className="form-input-sign-in"
              id="avatar"
              accept="image/*"
              type="file"
              required
            ></input>
          </label>

          <button className="btn-sign-in" type="submit">
            Sign in
          </button>
        </form>
      </>
    );
  }
}

export { Form };
