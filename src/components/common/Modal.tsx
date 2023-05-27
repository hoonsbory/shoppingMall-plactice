import CommonBtn from '@/components/common/CommonBtn';
import useModalStore from '@/store/modalStore';
import { flexMiddleAlign } from '@/styles/common';
import { css } from '@emotion/react';

const Modal = () => {
  const isShow = useModalStore(state => state.isShow);
  const toggleModal = useModalStore(state => state.toggleModal);
  const content = useModalStore(state => state.content);
  return (
    <div css={modalCss(isShow)}>
      <p>{content}</p>
      <CommonBtn onClick={() => toggleModal()}>닫기</CommonBtn>
    </div>
  );
};

export default Modal;

const modalCss = (isShow: boolean) => css`
  ${flexMiddleAlign('column')}
  opacity: ${isShow ? 1 : 0};
  transition: opacity 0.5s;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  box-shadow: rgb(0 0 0 / 34%) 0px 2.5px 10px;
  border-radius: 10px;
  padding: 10px 30px;
  height: 150px;
  width: 70vw;
  max-width: 300px;
  visibility: ${isShow ? 'visible' : 'hidden'};
  background: white;
  word-break: keep-all;
  z-index: 900;
  p {
    margin-bottom: 20px;
  }
`;
