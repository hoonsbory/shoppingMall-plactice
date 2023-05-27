import { commonTableCellCss, commonTableCss } from '@/styles/cart';
import { css } from '@emotion/react';
interface ICartResult {
  totalOrderPrice: number;
  discountedPrice: number;
  totalPaymentPrice: number;
}
const CartResult = ({ totalOrderPrice, discountedPrice, totalPaymentPrice }: ICartResult) => {
  return (
    <section css={sectionCss}>
      <div css={tableHeader}>
        <div css={tableRow('36%')}>총 주문금액</div>
        <div css={tableRow('28%')}>총 할인금액</div>
        <div css={tableRow('36%')}>총 결제금액</div>
      </div>
      <div css={commonTableCss}>
        <div css={tableRow('36%')}>{formatPrice(totalOrderPrice)}원</div>
        <div css={tableRow('28%')}>{formatPrice(discountedPrice)}원</div>
        <div css={tableRow('36%')}>{formatPrice(totalPaymentPrice)}원</div>
      </div>
    </section>
  );
};

export default CartResult;

const formatPrice = (price: number) => Math.floor(price).toLocaleString();

const sectionCss = css`
  margin: 117px auto 137px;
  font-size: 12px;
  border-top: 1px solid rgb(0, 0, 0);
`;

const tableHeader = css`
  ${commonTableCss}
  border-bottom: 1px solid rgb(228, 228, 228);
`;

const tableRow = (width: string) => css`
  ${commonTableCellCss}
  height: 74px;
  text-align: center;
  width: ${width};
`;
