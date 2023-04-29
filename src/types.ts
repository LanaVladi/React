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
  username: string;
  birthday: string;
  gender: string;
  country: string;
  avatar: string;
  remember: boolean;
};

export type FormProps = {
  addNewCard: (card: SignInFormFields) => void;
};

export type CardType = {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  gender: string;
};

export type partialCardInfo = {
  id: number;
  name: string;
  image: string;
};
