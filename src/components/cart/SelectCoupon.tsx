import { ICoupon } from '@/interfaces/couponInterface';
import { css } from '@emotion/react';
import axios from 'axios';
import { ChangeEvent } from 'react';
import { useQuery } from 'react-query';

const getCoupons = async (): Promise<ICoupon[]> => {
  const res = await axios.get('/api/getCoupons');
  return res.data;
};

const SelectCoupon = ({
  handleSelectChange,
}: {
  handleSelectChange: (e: ChangeEvent<HTMLSelectElement>, couponse: ICoupon[]) => void;
}) => {
  const { data: coupons } = useQuery(['getCoupons'], getCoupons);

  return (
    <select onChange={e => handleSelectChange(e, coupons!)}>
      <option value="" hidden>
        쿠폰을 선택해주세요
      </option>
      {coupons &&
        coupons.map((coupon, idx) => (
          <option key={coupon.title} value={idx}>
            {coupon.title}
          </option>
        ))}
    </select>
  );
};

export default SelectCoupon;
