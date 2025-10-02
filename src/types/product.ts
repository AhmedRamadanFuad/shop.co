export type Review = {
  id: string;
  name: string;
  verified: boolean;
  rating: number;
  date: string;
  description: string;
};

export type Color = {
  id: string;
  name: string;
  class: string;
};

export type Size = {
  id: string;
  name: string;
};

export type Image = {
  id: string;
  url: string;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  discount?: number;
  images: Image[];
  reviews: Review[];
  category: string;
  colors: Color[];
  sizes: Size[];
  style: string;
  description: string;
};
