import Head from 'next/head';
import Pagination from '@/components/common/Pagination';
import PromiseHandler from '@/components/common/PromiseHandlerComponent';
import { IProducts } from '@/interfaces/productInterface';
import axios from 'axios';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '@/components/common/Layout';
import ProductSkeleton from '@/components/product/ProductSkeleton';

const ProductWrapper = dynamic(() => import('@/components/product/ProductWrapper'), {
  ssr: false,
});
const Product = () => {
  const router = useRouter();
  const [selectedPage, setSelectedPage] = useState(0);
  const [productCount, setproductCount] = useState(0);
  const count = 5;
  const getProductItems = async (): Promise<IProducts> => {
    const res = await axios.get('/api/getProductItems', {
      params: {
        page: selectedPage,
        count,
      },
    });
    setproductCount(res.data.productsTotalCount);
    return res.data;
  };

  useEffect(() => {
    if (router.isReady) setSelectedPage(Number(router.query.page) || 1);
  }, [router.isReady, router.query]);

  return (
    <>
      <Layout>
        <PromiseHandler
          FulfilledComponent={
            <>
              <ProductWrapper
                queryKey={['getProductItems', selectedPage]}
                queryFn={getProductItems}
              />
            </>
          }
          PendingComponent={<ProductSkeleton />}
          RejectComponent={<div>에러가 발생했습니다.</div>}
        />
        <Pagination count={count} productCount={productCount} selectedPage={selectedPage} />
      </Layout>
    </>
  );
};

export default Product;
