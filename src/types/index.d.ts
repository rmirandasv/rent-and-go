export type Brand = {
  id: number;
  name: string;
  logo: {
    url: string;
    width: number;
    height: number;
  };
};

export type Model = {
  id: number;
  name: string;
  brand: Brand;
};

export type Image = {
  url: string;
  width: number;
  height: number;
};

export type Car = {
  id: number;
  model: Model;
  images: Image[];
  description: string;
  year: string;
  is_available: boolean;
};