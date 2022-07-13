export interface IProduct {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  photo: string;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface IcartState {
  items: ICartItem[];
}
