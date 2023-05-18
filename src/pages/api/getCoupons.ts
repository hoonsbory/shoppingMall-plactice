import { coupons } from '@/datas/coupons';
import { ICoupon } from '@/interfaces/couponInterface';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse<ICoupon[]>) {
  res.status(200).json(coupons);
}
