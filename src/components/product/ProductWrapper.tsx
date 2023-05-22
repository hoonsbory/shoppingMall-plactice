import { IProducts } from '@/interfaces/productInterface';
import { useQuery } from 'react-query';

interface IProductWrapper {
  queryFn: () => Promise<IProducts>;
  queryKey: (string | number)[];
}

const ProductWrapper = ({ queryFn, queryKey }: IProductWrapper) => {
  const { data } = useQuery(queryKey, queryFn);
  return <div>{data && data.products.map(product => <p>{product.item_name}</p>)}</div>;
};
export default ProductWrapper;
