import useCartStore from '@/store/cartStore';
import { css } from '@emotion/react';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { commonTableCellCss } from '@/styles/cart';

//수량 핸들러
const QuantityHandler = ({ prevQuantity, idx }: { prevQuantity: number; idx: number }) => {
  const [quantity, setQuantity] = useState(prevQuantity);
  const updateQuantity = useCartStore(state => state.updateQuantity);

  //숫자가 아닌 값이 들어오거나 빈값이면 return
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (isNaN(value) || !value) return;
    setQuantity(value);
  };
  const handlePlus = () => setQuantity(quantity => quantity + 1);

  const handleMinus = () => setQuantity(quantity => (quantity !== 1 ? quantity - 1 : quantity));

  useEffect(() => updateQuantity(quantity, idx), [quantity]);
  return (
    <div css={quantityHandlerCss}>
      <div>
        <div>
          <button onClick={handleMinus} css={buttonCss('left')}>
            -
          </button>
          <input type="text" onChange={handleChange} value={quantity} />
          <button onClick={handlePlus} css={buttonCss('right')}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

const quantityHandlerCss = css`
  ${commonTableCellCss}
  padding: 30px 0px;
  text-align: center;
  width: 200px;
  border-style: solid;
  border-color: rgb(228, 228, 228);
  border-image: initial;
  border-width: 1px 1px 0px;
  div:first-of-type {
    display: inline-block;
    width: 108px;
    div:first-of-type {
      display: flex;
    }
  }

  input {
    display: block;
    color: rgb(26, 26, 26);
    outline: none;
    margin: 0px;
    padding: 0px;
    width: 37px;
    height: 36px;
    border: 1px solid rgb(228, 228, 228);
    font-size: 14px;
    font-weight: 500;
    text-align: center;
  }
`;
const buttonCss = (borderDirection: string) => css`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    min-height: 25px;
    width: 36px;
    height: 36px;
    min-width: initial;
    border-width: 1px;
    border-top-style: solid;
    border-bottom-style: solid;
    border-${borderDirection}-style: solid;
    border-top-color: rgb(228, 228, 228);
    border-bottom-color: rgb(228, 228, 228);
    border-${borderDirection}-color: rgb(228, 228, 228);
    border-image: initial;
    border-radius: 0px;
    background: rgb(255, 255, 255);
    font-size: 20px;
    font-weight: 400;
    color: rgb(160, 160, 160);
`;

export default React.memo(QuantityHandler);
