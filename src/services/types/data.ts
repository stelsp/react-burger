export type TIngredient = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;

  id: string; // мб не надо будет
};

export type TOrder = {
  _id: string;
  ingredients: string[];
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
};

export type TwsData = {
  success: boolean;
  total: number;
  totalToday: number;
  orders: TOrder[];
};

export type TOrderSuccess = {
  success: true;
  name: string;
  order: {
    ingredients: TIngredient[];
    owner: {
      name: string;
      email: string;
      createdAt: string;
      updatedAt: string;
    };
    _id: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    number: number;
    price: number;
  };
};
