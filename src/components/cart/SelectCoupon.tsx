import { ICoupon } from '@/interfaces/couponInterface';
import { ChangeEvent } from 'react';

const SelectCoupon = ({
  handleSelectChange,
  coupons,
}: {
  handleSelectChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  coupons: ICoupon[];
}) => {
  return (
    <select onChange={handleSelectChange}>
      <option value="" hidden>
        쿠폰을 선택해주세요
      </option>
      {coupons.map((coupon, idx) => (
        <option value={idx}>{coupon.title}</option>
      ))}
    </select>
  );
};

export default SelectCoupon;
