import { css } from '@emotion/react';
import React from 'react';

export interface ICheckBox {
  isChecked: boolean;
  toggleCheck: (...args: any) => void;
  id: number | string;
}

//id값과 토글 함수를 받는 체크박스
const CommonCheckBox = ({ isChecked, toggleCheck, id }: ICheckBox) => {
  return (
    <span css={checkBoxCss}>
      <input type="checkbox" onChange={() => toggleCheck(id)} id={`check${id}`} />
      <label css={labelCss(isChecked)} htmlFor={`check${id}`} />
    </span>
  );
};

export default React.memo(CommonCheckBox);

const checkBoxCss = css`
  overflow: hidden;
  position: relative;
  vertical-align: top;
  min-width: 24px;
  min-height: 24px;
  line-height: 24px;
  input {
    overflow: hidden;
    position: absolute;
    top: 2px;
    left: 2px;
    z-index: -1;
    width: 1px;
    height: 1px;
    border: 0px;
    background: transparent;
    visibility: hidden;
    appearance: none;
  }
`;

const labelCss = (isChecked: boolean) => css`
  display: inline-block;
  position: relative;
  z-index: 1;
  cursor: pointer;
  vertical-align: top;
  padding-left: 29px;
  font-size: 14px;
  :after {
    top: 4px;
    left: 8px;
    width: 6px;
    height: 12px;
    position: absolute;
    border-style: solid;
    border-color: ${isChecked ? 'rgb(255, 255, 255)' : 'rgb(212, 212, 212)'};
    border-image: initial;
    border-width: 0px 1px 1px 0px;
    transform: rotate(45deg);
    content: '';
    box-sizing: content-box;
  }
  :before {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 0px;
    left: 0px;
    ${isChecked
      ? ` 
    border-color: rgb(55, 95, 255);
    background: rgb(55, 95, 255);
    `
      : `
    background: rgb(255, 255, 255);
    border: 1px solid rgb(212, 212, 212);
    `}
    border-radius: 2px;
    text-align: center;
    content: '';
    transition: background-color 0.2s ease 0s;
  }
`;
