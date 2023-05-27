import { IProduct } from '@/interfaces/productInterface';
import useCartStore from '@/store/cartStore';
import { commonTableCellCss } from '@/styles/cart';
import { css } from '@emotion/react';
import Image from 'next/image';
import React from 'react';

const productInfoCss = css`
  ${commonTableCellCss}
  position: relative;
  padding: 27px 60px 30px 0px;
  text-align: left;
  button {
    min-height: 25px;
    display: block;
    overflow: hidden;
    position: absolute;
    top: 24px;
    right: 24px;
    width: 24px;
    height: 24px;
    min-width: initial;
    background: url(//img.29cm.co.kr/next29cm/order/icon-remove.png) 0px 0px / 24px 24px no-repeat;
    line-height: 100em;
  }
`;

const innerFlexBox = css`
  display: flex;
  align-items: center;
  img {
    margin: 3px 25px 0px 0px;
  }
  p {
    font-weight: 600;
  }
  span {
    font-size: 14px;
  }
`;

//카트 상품 정보 칸
const ProductInfo = ({ product }: { product: IProduct }) => {
  const deleteProduct = useCartStore(state => state.deleteProduct);
  return (
    <div css={productInfoCss}>
      <div css={innerFlexBox}>
        <Image
          src={product.detail_image_url}
          width={110}
          height={110}
          alt={product.item_name + '이미지'}
        />
        <div>
          <p>{product.item_name}</p>
          <span>{product.price.toLocaleString()}원</span>
        </div>
      </div>
      <button onClick={() => deleteProduct(product.item_no)}></button>
    </div>
  );
};

export default React.memo(ProductInfo);
