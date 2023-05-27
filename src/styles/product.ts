import { css } from '@emotion/react';

export const productBoxWrapperCss = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
  column-gap: 15px;
  row-gap: 70px;
  justify-content: center;
  padding: initial;
`;

export const productBoxCss = css`
  list-style-type: none;
  width: 300px;
  display: inline;
  div:first-of-type {
    width: 100%;
    height: 300px;
    position: relative;
  }
  div:last-child {
    p {
      font-weight: 600;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    span {
      margin-right: 10px;
    }
  }
`;
