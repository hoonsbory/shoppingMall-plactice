import Header from '@/components/common/Header';
import { css } from '@emotion/react';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <section
      css={css`
        margin-left: 7vw;
        margin-right: 7vw;
        display: flex;
        flex-direction: column;
        align-content: center;
      `}
    >
      <Header />
      <article
        css={css`
          display: flex;
          flex-direction: column;
          margin-top: 90px;
        `}
      >
        {children}
      </article>
    </section>
  );
};

export default Layout;
