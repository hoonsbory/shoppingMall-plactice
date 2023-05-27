export interface IProduct {
  item_no: number;
  item_name: string;
  detail_image_url: string;
  price: number;
  score: number;
  availableCoupon?: boolean;
}

export interface IProducts {
  products: IProduct[];
  productsTotalCount: number;
}

export interface ICartProduct extends IProduct {
  quantity: number;
}
