import Modal from '@/components/common/Modal';
import Portal from '@/components/common/Protal';
import ProductBox from '@/components/product/ProductBox';
import { IProducts, IProduct } from '@/interfaces/productInterface';
import useCartStore from '@/store/cartStore';
import useModalStore from '@/store/modalStore';
import { css } from '@emotion/react';
import { useQuery } from 'react-query';
interface IProductWrapper {
  queryFn: () => Promise<IProducts>;
  queryKey: (string | number)[];
}

const ProductWrapper = ({ queryFn, queryKey }: IProductWrapper) => {
  const cartedProducts = useCartStore(state => state.products);
  const { data } = useQuery(queryKey, queryFn);

  data?.products.sort((a, b) => b.score - a.score);
  return (
    <>
      <Portal selector="#portal">
        <Modal />
      </Portal>
      <ul css={wrapperCss}>
        {data &&
          data.products.map(product => (
            <ProductBox
              product={product}
              // 카트에 담겨진 상품 판별
              isCarted={cartedProducts.some(i => i.item_no === product.item_no)}
            />
          ))}
      </ul>
    </>
  );
};
export default ProductWrapper;

export const wrapperCss = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
  column-gap: 15px;
  row-gap: 70px;
  justify-content: center;
  padding: initial;
`;
