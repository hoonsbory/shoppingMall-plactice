import ProductInfo from '@/components/cart/ProductInfo';
import QuantityHandler from '@/components/cart/QuantityHandler';
import CommonCheckBox from '@/components/common/CommonCheckBox';
import { ICartProduct } from '@/interfaces/productInterface';
import useCartStore from '@/store/cartStore';
import { commonTableCellCss, commonTableCss } from '@/styles/cart';
import { css } from '@emotion/react';
import React from 'react';
const CartItem = ({ product }: { product: ICartProduct }) => {
  const { price, quantity, isChecked, item_no } = product;
  const toggleCheck = useCartStore(state => state.toggleCheck);

  return (
    <div>
      <div css={commonTableCss}>
        <div css={checkboxTableCss}>
          <CommonCheckBox toggleCheck={toggleCheck} isChecked={isChecked} id={item_no} />
        </div>
        <ProductInfo product={product} />
        <QuantityHandler item_no={item_no} prevQuantity={quantity} />
        <OrderPrice price={price} quantity={quantity} />
      </div>
    </div>
  );
};

export default CartItem;

const checkboxTableCss = css`
  ${commonTableCellCss}
  text-align: center;
  width: 4.3%;
`;

const OrderPrice = React.memo(({ price, quantity }: { price: number; quantity: number }) => {
  return <div css={orderPriceCss}>{(price * quantity).toLocaleString()}원</div>;
});

const orderPriceCss = css`
  ${commonTableCellCss}
  padding: 30px 0px;
  text-align: center;
  vertical-align: middle;
  width: 200px;
  font-weight: 600;
`;
