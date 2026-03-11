export interface Navlink {
  link: string;
  text: string;
}

export type NavLinks = Navlink[];

export interface Comment {
  id: number;
  text: string;
}

export type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
};

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  createdAt: Date;
};
