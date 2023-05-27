import useHydrated from '@/hooks/useHydrated';
import { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface IPortal {
  children: ReactNode;
  selector: string;
}

const Portal = ({ children, selector }: IPortal) => {
  const element = useHydrated(document.querySelector(selector));
  if (!element) {
    return <></>;
  }

  return ReactDOM.createPortal(children, element);
};

export default Portal;
