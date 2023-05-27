import CommonBtn from '@/components/common/CommonBtn';
import { IProduct } from '@/interfaces/productInterface';
import useCartStore from '@/store/cartStore';
import useModalStore from '@/store/modalStore';
import { productBoxCss } from '@/styles/product';
import Image from 'next/image';

const ProductBox = ({ product, isCarted }: { product: IProduct; isCarted: boolean }) => {
  const insertProduct = useCartStore(state => state.insertProduct);
  const cartCount = useCartStore(state => state.products).length;
  const deleteProduct = useCartStore(state => state.deleteProduct);
  const toggleModal = useModalStore(state => state.toggleModal);

  const handleInsertProduct = (product: IProduct) => {
    if (cartCount === 3) {
      toggleModal('장바구니는 3개까지만 담을 수 있습니다.');
      return;
    }
    insertProduct(product);
    toggleModal('상품이 장바구니에 추가되었습니다.');
  };
  const handleDeleteProduct = (item_no: number) => {
    deleteProduct(item_no);
    toggleModal('상품이 장바구니에서 제거되었습니다.');
  };
  return (
    <li css={productBoxCss}>
      <div>
        <Image
          src={product.detail_image_url}
          fill
          alt={product.item_name + ' 이미지'}
          object-fit={'contain'}
        />
      </div>
      <div>
        <p>{product.item_name}</p>
        <span>{product.price.toLocaleString()}원</span>
        {isCarted ? (
          <CommonBtn onClick={() => handleDeleteProduct(product.item_no)}>장바구니 빼기</CommonBtn>
        ) : (
          <CommonBtn onClick={() => handleInsertProduct(product)}>장바구니 담기</CommonBtn>
        )}
      </div>
    </li>
  );
};

export default ProductBox;
