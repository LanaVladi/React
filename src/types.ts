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
  avatar: File[];
  remember: boolean;
};

export type FormProps = {
  addNewCard: (card: SignInFormFields) => void;
};
