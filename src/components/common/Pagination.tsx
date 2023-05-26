import { css } from '@emotion/react';
import Link from 'next/link';
import React from 'react';

interface IPagination {
  count: number;
  productCount: number;
  selectedPage: number;
}

//보여지는 페이지 버튼 배열 생성
const getVisiblePage = (pageNumArr: number[], selectedPage: number) => {
  const first = selectedPage < 3 ? 0 : selectedPage - 3;
  const last = selectedPage + 2;
  return pageNumArr.slice(first, last);
};

const Pagination = ({ count, productCount, selectedPage }: IPagination) => {
  const pageLength = Math.ceil(productCount / count);
  const pageNumArr = Array(pageLength)
    .fill(null)
    .map((_, idx) => idx + 1);

  //이전 다음 페이지 계산
  const previousPage = selectedPage === 1 ? 1 : selectedPage - 1;
  const nextPage = selectedPage === pageLength ? pageLength : selectedPage + 1;

  const visiblePage = getVisiblePage(pageNumArr, selectedPage);

  //현재 보는 페이지가 첫번째 or 마지막인지 확인
  const isFirstPage = visiblePage[0] === 1;
  const isLastPage = visiblePage[visiblePage.length - 1] === pageLength;
  const path = '/product?page=';
  if (!pageLength) return <></>;
  return (
    <div css={wrapper}>
      <Link href={path + previousPage}>
        <Arrow direction="left" />
      </Link>
      {/* 첫번째 페이지가 visible하지않다면 첫번째 페이지 버튼과 visible 페이지의 이전페이지를 ... 버튼으로 생성 */}
      {isFirstPage || (
        <>
          <Link href={path + 1}>1</Link>
          <Link href={path + (visiblePage[0] - 1)}>...</Link>
        </>
      )}

      {/* visible 페이지 버튼 */}
      {visiblePage.map(page => (
        <Link href={path + page} css={linkCss(selectedPage === page)}>
          {page}
        </Link>
      ))}

      {/* 마지막 페이지가 visible하지않다면 마지막 페이지 버튼과 visible 페이지의 다음페이지를 ... 버튼으로 생성 */}
      {isLastPage || (
        <>
          <Link href={path + (visiblePage[visiblePage.length - 1] + 1)}>...</Link>
          <Link href={path + pageLength}>{pageLength}</Link>
        </>
      )}
      <Link href={path + nextPage}>
        <Arrow direction="right" />
      </Link>
    </div>
  );
};

export default React.memo(Pagination);

const linkCss = (isSelected: boolean) => css`
  color: ${isSelected ? 'black' : `var(--lightGrey)`};
`;

const wrapper = css`
  margin: 40px 0px;
  display: inline-block;
  position: relative;
  padding: 0 50px;
  text-align: center;
  line-height: 22px;
  vertical-align: top;
  color: var(--lightGrey);
  a {
    padding: 0 10px !important;
    font-size: 48px !important;
    line-height: 55px;
    text-decoration: none;
  }
`;

const Arrow = ({ direction }: { direction: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 42 80"
      css={css`
        width: 11px;
        height: 22px;
      `}
    >
      <path
        d={direction === 'left' ? 'M41 80L1 39.917 40.834 0' : 'M1 0l40 40.083L1.166 80'}
        css={css`
          fill: none;
          fill-rule: evenodd;
          stroke: rgb(0, 0, 0);
          stroke-width: 5;
        `}
      ></path>
    </svg>
  );
};
