import { boxCss } from '@/components/product/ProductBox';
import { wrapperCss } from '@/components/product/ProductWrapper';
import { css } from '@emotion/react';

const ProductSkeleton = () => {
  const arr = Array(5).fill(0);
  return (
    <ul css={wrapperCss}>
      {arr.map(_ => (
        <li css={boxCss}>
          <div
            css={css`
              ${bg}
            `}
          ></div>
          <div>
            <p
              css={css`
                ${bg}
                width: 80%;
                height: 15px;
              `}
            ></p>
            <p
              css={css`
                ${bg}
                width: 20%;
                height: 10px;
              `}
            ></p>
          </div>
        </li>
      ))}
    </ul>
  );
};

const bg = css`
  background: var(--lightGrey);
`;

export default ProductSkeleton;
