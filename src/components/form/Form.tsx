import React from 'react';
import { FormProps, FormValid, SignInFormFields } from 'types';
import { Confirmation } from './Confirmation';
import './form.css';
import { ValidationForm } from './ValidationForm';

class Form extends React.Component<FormProps, FormValid> {
  validationForm = new ValidationForm();
  textInputName: React.RefObject<HTMLInputElement>;
  dateInputBirthday: React.RefObject<HTMLInputElement>;
  radioBtnGenderMale: React.RefObject<HTMLInputElement>;
  radioBtnGenderFemale: React.RefObject<HTMLInputElement>;
  dropDownListCountry: React.RefObject<HTMLSelectElement>;
  fileInputImage: React.RefObject<HTMLInputElement>;
  checkboxRemember: React.RefObject<HTMLInputElement>;

  constructor(props: SignInFormFields & FormProps) {
    super(props);
    this.textInputName = React.createRef();
    this.dateInputBirthday = React.createRef();
    this.radioBtnGenderMale = React.createRef();
    this.radioBtnGenderFemale = React.createRef();
    this.dropDownListCountry = React.createRef();
    this.fileInputImage = React.createRef();
    this.checkboxRemember = React.createRef();

    this.state = {
      isValidUserName: true,
      isValidBirthday: true,
      isValidGender: true,
      isValidCountry: true,
      isValidAvatar: true,
      isDisplayConfirmation: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = event.currentTarget;

    const cardsData: SignInFormFields = {
      username: this.textInputName.current?.value,
      birthday: this.dateInputBirthday.current?.value,
      gender: this.radioBtnGenderMale.current?.checked ? 'male' : 'female',
      country: this.dropDownListCountry.current?.value,
      avatar: this.fileInputImage.current?.value,
      remember: this.checkboxRemember.current?.checked ? 'yes' : 'no',
    };

    const isValidData = this.validateForm(cardsData);
    if (isValidData) {
      this.props.setSignInCards({
        ...cardsData,
        avatar: URL.createObjectURL(this.fileInputImage.current?.files?.[0] as unknown as Blob),
      });
      this.setState({ isDisplayConfirmation: true });

      setTimeout(() => {
        formData.reset();
        this.setState({ isDisplayConfirmation: false });
      }, 2500);
    }
  };

  validateForm(cardsData: SignInFormFields): boolean {
    const isValidUserName = this.validationForm.textInputNameValidate(cardsData.username);
    const isValidBirthday = this.validationForm.dateInputBirthdayValidate(cardsData.birthday);
    const isValidGender = this.validationForm.radioBtnGenderValidate(
      this.radioBtnGenderMale.current?.checked,
      this.radioBtnGenderFemale.current?.checked
    );
    const isValidCountry = this.validationForm.dropDownListCountryValidate(cardsData.country);
    const isValidAvatar = this.validationForm.fileInputImageValidate(cardsData.avatar);

    this.setState({
      isValidUserName,
      isValidBirthday,
      isValidGender,
      isValidCountry,
      isValidAvatar,
    });

    const isValidData =
      isValidUserName && isValidBirthday && isValidGender && isValidCountry && isValidAvatar;
    return isValidData;
  }

  render(): React.ReactNode {
    const {
      isValidUserName,
      isValidBirthday,
      isValidGender,
      isValidCountry,
      isValidAvatar,
      isDisplayConfirmation,
    } = this.state;
    return (
      <>
        <form className="sign-in-form" onSubmit={this.handleSubmit}>
          <h1 className="sign-in-title">Sign in</h1>
          <label className="form-label">
            Name:
            <input
              className="form-input-sign-in name-input"
              type="text"
              name="username"
              placeholder="Enter your name"
              ref={this.textInputName}
            />
            {!isValidUserName && <p className="form-warning">Enter your name!</p>}
          </label>

          <label className="form-label">
            Birthday:
            <input
              className="form-input-sign-in date-input"
              type="date"
              name="birthday"
              ref={this.dateInputBirthday}
            />
            {!isValidBirthday && <p className="form-warning">Please enter your birthday!</p>}
          </label>

          <div className="radio-btn">
            <label className="form-label">
              <input type="radio" value="Male" name="gender" ref={this.radioBtnGenderMale} />
              Male
            </label>

            <label className="form-label">
              <input type="radio" value="Female" name="gender" ref={this.radioBtnGenderFemale} />
              Female
            </label>
            {!isValidGender && <p className="form-warning">Please select gender!</p>}
          </div>

          <div>
            <label className="form-label">
              Choose a country:
              <select
                defaultValue="default-country"
                name="country"
                className="form-input-sign-in"
                ref={this.dropDownListCountry}
              >
                <option disabled value="default-country">
                  Select country
                </option>
                <option value={'Uzbekistan'}>Uzbekistan</option>
                <option value={'Belarus'}>Belarus</option>
                <option value={'Japan'}>Japan</option>
                <option value={'Australia'}>Australia</option>
              </select>
            </label>
            {!isValidCountry && <p className="form-warning">Please select country!</p>}
          </div>

          <label className="form-label">
            Add image:
            <input
              className="form-input-sign-in"
              type="file"
              name="avatar"
              accept="image/**"
              ref={this.fileInputImage}
            />
            {!isValidAvatar && <p className="form-warning">Please upload image!</p>}
          </label>

          <label className="form-label">
            Remember me:
            <input
              className="form-input-sign-in checkbox-input"
              type="checkbox"
              name="remember"
              ref={this.checkboxRemember}
            />
          </label>

          <button className="btn-sign-in" type="submit">
            Sign in
          </button>
          {isDisplayConfirmation && <Confirmation />}
        </form>
      </>
    );
  }
}

export { Form };
