import ProductInfo from '@/components/cart/ProductInfo';
import QuantityHandler from '@/components/cart/QuantityHandler';
import CommonCheckBox, { ICheckBox } from '@/components/common/CommonCheckBox';
import { ICartProduct } from '@/interfaces/productInterface';
import { css } from '@emotion/react';
import React from 'react';
interface ICartItem extends ICheckBox {
  product: ICartProduct;
}
const CartItem = ({ product, toggleCheck, isChecked, id }: ICartItem) => {
  const { price, quantity } = product;
  return (
    <div css={{ position: 'relative' }}>
      <div css={tableCss}>
        <div css={checkboxTableCss}>
          <CommonCheckBox toggleCheck={toggleCheck} isChecked={isChecked} id={id} />
        </div>
        <ProductInfo product={product} />
        <QuantityHandler idx={id as number} prevQuantity={quantity} />
        <OrderPrice price={price} quantity={quantity} />
      </div>
    </div>
  );
};

export default CartItem;

const tableCss = css`
  position: relative;
  display: table;
  width: 100%;
  table-layout: fixed;
`;

const tableCellCommonCss = css`
  display: table-cell;
  font-size: 18px;
  line-height: 24px;
  color: rgb(0, 0, 0);
  vertical-align: middle;
  border-top: 1px solid rgb(228, 228, 228);
`;

const checkboxTableCss = css`
  ${tableCellCommonCss}
  text-align: center;
  width: 4.3%;
`;

const orderPriceCss = css`
  ${tableCellCommonCss}
  padding: 30px 0px;
  text-align: center;
  vertical-align: middle;
  width: 200px;
  font-weight: 600;
`;
const OrderPrice = React.memo(({ price, quantity }: { price: number; quantity: number }) => {
  return <div css={orderPriceCss}>{(price * quantity).toLocaleString()}원</div>;
});
