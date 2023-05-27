import Seo from '@/components/common/Seo';
import { Html, Main, NextScript, Head } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <Seo />
      </Head>
      <body>
        <div id="portal" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
