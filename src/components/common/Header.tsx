import useHydrated from '@/hooks/useHydrated';
import useCartStore from '@/store/cartStore';
import { css } from '@emotion/react';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  const cartLength = useCartStore(state => state.products).length;
  const afterHydrated = useHydrated<number>(cartLength);
  return (
    <header css={headerCss}>
      <div css={headerLeftCss}>
        <Link href={'/product'} />
      </div>
      <div css={headerRightCss}>
        <Link href={'/cart'}>
          <span></span>
          <strong>SHOPPING BAG</strong>
          {/* 카트에 담긴 게 있을때만 렌더 */}
          {afterHydrated > 0 && <div css={cartLengthCircle}>{afterHydrated}</div>}
        </Link>
      </div>
    </header>
  );
};

export default React.memo(Header);
const headerLeftCss = css`
  width: 120px;
  height: 30px;
  margin: 0;
  padding: 29px 50px 0;
  a {
    background: url(https://img.29cm.co.kr/next-next_attach/2023/05/24/244dfcad0e1c4490b2a7d6fd85aa20fe_20230524160435.png);
    background-size: 60px 16px;
    width: 60px;
    height: 16px;
    display: inline-block;
    overflow: hidden;
    vertical-align: top;
    line-height: 100em;
  }
`;
const headerRightCss = css`
  position: absolute;
  right: 50px;
  top: 22px;
  vertical-align: top;
  a {
    position: relative;
    display: inline-block;
    height: 30px;
    margin-left: 13px;
    box-sizing: border-box;
    text-align: center;
    vertical-align: top;
    line-height: 30px;
  }
  span {
    background: url(https://img.29cm.co.kr/next29cm/sp_29cm.png);
    background-position: -50px 0;
    background-size: 200px 200px;
    display: inline-block;
    overflow: hidden;
    width: 17px;
    height: 17px;
  }
`;
const headerCss = css`
  top: 0;
  left: 0;
  position: fixed;
  height: 70px;
  background: white;
  box-shadow: rgb(0 0 0 / 34%) 0px 2.5px 10px;
  width: 100%;
  z-index: 899;
`;

const cartLengthCircle = css`
  position: absolute;
  padding: 0 3px;
  background: #ff4800;
  text-align: center;
  color: #fff;
  border-radius: 13px;
  box-sizing: border-box;
  top: -2px;
  left: 10px;
  min-width: 18px;
  height: 18px;
  font-size: 9px;
  line-height: 18px;
`;
