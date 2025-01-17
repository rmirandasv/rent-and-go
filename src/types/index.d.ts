export type Brand = {
  id: number;
  name: string;
  logo: {
    url: string;
    width: number;
    height: number;
  };
  cars: Car[];
};

export type Model = {
  id: number;
  name: string;
  brand: Brand;
};

export type Image = {
  id: number;
  url: string;
  width: number;
  height: number;
};

export type Car = {
  documentId: string;
  model: Model;
  brand: Brand;
  images: Image[];
  description: string;
  year: string;
  is_available: boolean;
  price_per_day: number;
};

export type User = {
  id: number;
  documentId: string;
  username: string;
  email: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
};
