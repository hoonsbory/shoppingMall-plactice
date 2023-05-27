import Header from '@/components/common/Header';
import { css } from '@emotion/react';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <section css={sectionCss}>
      <Header />
      <article>{children}</article>
    </section>
  );
};

export default Layout;

const sectionCss = css`
  margin-left: 7vw;
  margin-right: 7vw;
  article {
    display: flex;
    flex-direction: column;
    margin-top: 90px;
  }
`;
