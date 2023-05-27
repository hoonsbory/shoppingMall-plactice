import { productBoxCss, productBoxWrapperCss } from '@/styles/product';
import { css } from '@emotion/react';

const ProductSkeleton = () => {
  const skeletonLength = Array(5).fill(0);
  return (
    <ul css={productBoxWrapperCss}>
      {skeletonLength.map((_, idx) => (
        <li key={idx} css={productBoxCss}>
          <div css={skeletonCss()}></div>
          <div>
            <p css={skeletonCss('80%', '15px')}></p>
            <p css={skeletonCss('20%', '10px')}></p>
          </div>
        </li>
      ))}
    </ul>
  );
};

const bg = css`
  background: var(--lightGrey);
`;

const skeletonCss = (width: string = 'unset', height: string = 'unset') => css`
  ${bg}
  width : ${width};
  height: ${height};
`;

export default ProductSkeleton;
