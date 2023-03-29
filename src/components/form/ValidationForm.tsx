class ValidationForm {
  textInputNameValidate = (username: string | undefined): boolean => {
    if (username) {
      username.length < 4 ? false : true;
    }
    if (username === undefined) return false;
    return Boolean(username?.match(/^([a-zA-ZА-Яа-я '-])+$/));
  };

  dateInputBirthdayValidate = (birthday: string | undefined): boolean => {
    if (birthday === undefined) return false;

    const currentDate = new Date();
    const dateOfBirth = new Date(birthday);

    return currentDate.getDate() > dateOfBirth.getDate();
  };

  radioBtnGenderValidate = (male: string | undefined, female: string | undefined): boolean =>
    Boolean(male) || Boolean(female);

  dropDownListCountryValidate = (country: string | undefined): boolean =>
    country !== 'default-country';

  fileInputImageValidate = (avatar: string | undefined): boolean => Boolean(avatar);
  checkboxRememberValidate = (remember: string | undefined): boolean => Boolean(remember);
}

export { ValidationForm };
