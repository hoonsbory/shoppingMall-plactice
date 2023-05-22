import Link from 'next/link';
import React from 'react';

interface IPagination {
  count: number;
  productCount: number;
  selectedPage: number;
}

const getVisiblePage = (pageNumArr: number[], selectedPage: number) => {
  const first = selectedPage < 5 ? 0 : selectedPage - 5;
  const last = selectedPage + 4;
  return pageNumArr.slice(first, last);
};

const Pagination = ({ count, productCount, selectedPage }: IPagination) => {
  const pageLength = Math.ceil(productCount / count);
  const pageNumArr = Array(pageLength)
    .fill(null)
    .map((_, idx) => idx + 1);
  const previousPage = selectedPage === 1 ? 1 : selectedPage - 1;
  const nextPage = selectedPage === pageLength ? pageLength : selectedPage + 1;
  const visiblePage = getVisiblePage(pageNumArr, selectedPage);
  const isFirstPage = visiblePage[0] === 1;
  const isLastPage = visiblePage[visiblePage.length - 1] === pageLength;
  const path = '/product?page=';
  if (!pageLength) return <></>;
  return (
    <>
      <div>
        <Link href={path + previousPage}>이전</Link>
        {isFirstPage || <Link href={path + 1}>1</Link>}

        {visiblePage.map(page => (
          <Link href={path + page}>{page}</Link>
        ))}
        {isLastPage || <Link href={path + pageLength}>{pageLength}</Link>}
        <Link href={path + nextPage}>다음</Link>
      </div>
    </>
  );
};

export default React.memo(Pagination);
