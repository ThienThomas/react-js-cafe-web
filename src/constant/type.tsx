/* eslint-disable no-undef */

//Product Type:
export interface Product {
  id: string | number;
  name: string;
  imgUrl: string;
  price: number;
  type: ProductMenu;
}

export enum ProductMenu {
  ALL = 'ALL'
}
