import { ICartProduct } from '@/interfaces/productInterface';
import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';
interface cartState {
  products: ICartProduct[];
  toggleCheck: (item_no: number) => void;
  toggleAllCheck: (isAllChecked: boolean) => void;
  insertProduct: (product: Partial<ICartProduct>) => void;
  deleteProduct: (item_no: number) => void;
  updateQuantity: (quantity: number, item_no: number) => void;
}

const useCartStore = create<cartState>()(
  devtools(
    persist(
      set => ({
        products: [],
        toggleCheck: item_no =>
          set(state => {
            const idx = state.products.findIndex(product => product.item_no === item_no);
            state.products[idx].isChecked = !state.products[idx].isChecked;
            return {
              products: [...state.products],
            };
          }),
        toggleAllCheck: isAllChecked =>
          set(state => ({
            products: state.products.map(product => {
              product.isChecked = !isAllChecked;
              return product;
            }),
          })),
        insertProduct: product =>
          set(state => {
            product.quantity = 1;
            product.isChecked = true;
            state.products.push(product as ICartProduct);
            return { products: [...state.products] };
          }),
        deleteProduct: item_no =>
          set(state => ({
            products: state.products.filter(product => product.item_no !== item_no),
          })),
        updateQuantity: (quantity, item_no) =>
          set(state => {
            const idx = state.products.findIndex(product => product.item_no === item_no);
            state.products[idx].quantity = quantity;
            return { products: [...state.products] };
          }),
      }),
      {
        name: 'cartProducts',
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);

export default useCartStore;
