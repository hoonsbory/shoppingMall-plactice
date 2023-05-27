import CartItem from '@/components/cart/CartItem';
import CartResult from '@/components/cart/CartResult';
import CommonCheckBox from '@/components/common/CommonCheckBox';
import Layout from '@/components/common/Layout';
import PromiseHandlerComponent from '@/components/common/PromiseHandlerComponent';
import useHydrated from '@/hooks/useHydrated';
import { ICoupon } from '@/interfaces/couponInterface';
import useCartStore from '@/store/cartStore';
import { commonTableCellCss, commonTableCss } from '@/styles/cart';
import { css } from '@emotion/react';
import dynamic from 'next/dynamic';
import { ChangeEvent, useCallback, useMemo, useState } from 'react';

const SelectCoupon = dynamic(() => import('@/components/cart/SelectCoupon'), {
  ssr: false,
});
const cart = () => {
  const products = useHydrated(useCartStore(state => state.products)) || [];

  const [useCoupon, setUseCoupon] = useState<ICoupon>();

  const handleSelectChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>, coupons: ICoupon[]) => {
      setUseCoupon(coupons[Number(e.target.value)]);
    },
    [],
  );

  //총 주문 금액, 총 할인 금액, 총 결제 금액 계산
  //렌더링 유발하는 state를 전부 참조하고 있기 때문에 메모이제이션 불필요
  const calculatePrice = () => {
    let discountedPrice,
      totalPaymentPrice = 0;

    //체크된 상품의 수량만큼 가격 곱한 배열
    const calcQuantityPriceByChecked = products
      .filter(product => product.isChecked)
      .map(product => ({
        price: product.price * product.quantity,
        availableCoupon: product.availableCoupon,
      }));

    //총 주문 금액 더하기
    const totalOrderPrice = calcQuantityPriceByChecked.reduce((pv, cv) => pv + cv.price, 0);

    //쿠폰 선택 전이면 총 주문 금액 == 총 결제 금액
    if (!useCoupon) totalPaymentPrice = totalOrderPrice;
    else
      totalPaymentPrice = calcQuantityPriceByChecked
        .map(product => {
          const { price, availableCoupon } = product;
          //쿠폰에 맞게 할인된 가격 리턴
          if (availableCoupon === false) return price;
          if (useCoupon.discountRate) return price - price * (useCoupon.discountRate * 0.01);
          else return price - useCoupon.discountAmount!;
        })
        //할인된 가격 총액 구하기 => 할인가격이 마이너스일 경우 0으로 계산
        .reduce((pv, cv) => pv + (cv < 0 ? 0 : cv), 0);

    //총 할인금액은 총 주문금액 - 총 결제 금액
    discountedPrice = totalOrderPrice - totalPaymentPrice;
    return [totalOrderPrice, discountedPrice, totalPaymentPrice];
  };

  //상품이 전부 체크됐는지 확인
  const isAllChecked = useMemo(() => products.every(product => product.isChecked), [products]);

  const toggleAllCheck = useCartStore(state => state.toggleAllCheck);
  const toggleAllCheckHandler = () => {
    toggleAllCheck(isAllChecked);
  };

  const [totalOrderPrice, discountedPrice, totalPaymentPrice] = calculatePrice();

  return (
    <Layout>
      <div css={tableCss}>
        <div css={tableCellCss('4.3%')}>
          <CommonCheckBox toggleCheck={toggleAllCheckHandler} isChecked={isAllChecked} id={'all'} />
        </div>
        <div css={tableCellCss()}>상품 정보</div>
        <div css={tableCellCss('200px')}>수량</div>
        <div css={tableCellCss('200px')}>주문금액</div>
      </div>
      {products.map((product, idx) => (
        <CartItem product={product} />
      ))}
      <PromiseHandlerComponent
        FulfilledComponent={<SelectCoupon handleSelectChange={handleSelectChange} />}
        PendingComponent={
          <select>
            <option>쿠폰을 로딩 중입니다</option>
          </select>
        }
        RejectComponent={
          <select>
            <option>쿠폰 로딩에 실패했습니다</option>
          </select>
        }
      />
      <CartResult
        totalOrderPrice={totalOrderPrice}
        discountedPrice={discountedPrice}
        totalPaymentPrice={totalPaymentPrice}
      />
    </Layout>
  );
};

export default cart;

const tableCss = css`
  ${commonTableCss}
  border-top: 4px solid rgb(0, 0, 0);
`;

const tableCellCss = (width: string = 'unset') => css`
  ${commonTableCellCss}
  padding: 0px;
  border: 0px;
  height: 74px;
  font-weight: 700;
  text-align: center;
  width: ${width};
`;
