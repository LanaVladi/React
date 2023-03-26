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
  birthday: Date;
};

export interface SignInCardPropsType {
  username: string;
  birthday: string;
  country: string;
  avatar: string;
}
