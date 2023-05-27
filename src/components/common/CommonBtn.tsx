import { css } from '@emotion/react';

const CommonBtn = ({ children, onClick }: { children: string; onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      css={css`
        padding: 10px 15px;
        background: black;
        color: white;
        border-radius: 5px;
        min-width: 100px;
      `}
    >
      {children}
    </button>
  );
};

export default CommonBtn;
