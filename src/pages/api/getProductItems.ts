import { products } from '@/datas/products';
import { IProducts } from '@/interfaces/productInterface';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse<IProducts>) {
  const page = Number(req.query.page);
  const count = Number(req.query.count);
  const start = (page - 1) * count;
  const end = page * count;

  const filteredProductItems = products.slice(start, end);

  setTimeout(() => {
    res.status(200).json({
      products: filteredProductItems,
      productsTotalCount: products.length,
    });
  }, 1000);
}
