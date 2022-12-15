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
  COFFEE = 'COFFEE',
  CLOUDFEE = 'CLOUDFEE',
  CLOUDTEA = 'CLOUDTEA',
  HITEA = 'HITEA',
  MILKTEA = 'MILKTEA',
  HOMECOFFEE = 'HOMECOFFEE',
  SNACK = 'SNACK',
  ALL = 'ALL'
}
