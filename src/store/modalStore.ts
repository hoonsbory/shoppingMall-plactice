import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
interface modalState {
  isShow: boolean;
  content: string;
  toggleModal: (content?: string) => void;
}

const useModalStore = create<modalState>()(
  devtools(set => ({
    isShow: false,
    content: '',
    toggleModal: (content = '') => set(state => ({ isShow: !state.isShow, content })),
  })),
);

export default useModalStore;
