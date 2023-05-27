import { productBoxCss, productBoxWrapperCss } from '@/styles/product';
import { css } from '@emotion/react';

const ProductSkeleton = () => {
  const arr = Array(5).fill(0);
  return (
    <ul css={productBoxWrapperCss}>
      {arr.map(_ => (
        <li css={productBoxCss}>
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
