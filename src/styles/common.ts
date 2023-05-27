import { css } from '@emotion/react';

export const flexMiddleAlign = (direction: 'column' | 'row') => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: center;
  align-items: center;
`;
