export type Brand = {
  id: number;
  documentId: string;
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
  license_plate?: string;
  year: string;
  is_available: boolean;
  price_per_day: number;
};

export type User = {
  id: number;
  documentId: string;
  username: string;
  email: string;
  name: string | null;
  phone: string | null;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
};

export type Rental = {
  documentId: string;
  car: Car;
  user: User;
  start_date: string;
  end_date: string;
  rental_status: "pending" | "approved" | "cancelled" | "in_progress" | "completed";
  total_payment: number;
  created_at: string;
};
