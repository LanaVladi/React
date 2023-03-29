export interface DataPropsType {
  id: string;
  bookName: string;
  author: string;
  price: string;
  publishingHouse: string;
  quantityInStock: string;
  image: string;
  publicationYear: string;
  isPopular: string;
}

export type SignInFormFields = {
  username?: string;
  birthday?: string;
  gender?: string;
  country?: string;
  avatar?: string;
  remember?: string;
};

export type FormProps = {
  setSignInCards: (signInCard: SignInFormFields) => void;
};

export type FormValid = {
  isValidUserName: boolean;
  isValidBirthday: boolean;
  isValidGender: boolean;
  isValidCountry: boolean;
  isValidAvatar: boolean;
  isDisplayConfirmation: boolean;
};
